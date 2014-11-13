# -*- coding: utf-8 -*-
import os
from application import app, lm, db
from flask import session, redirect, url_for, request, flash, render_template, g, session, send_from_directory
from flask.ext.login import login_user, logout_user, current_user, login_required
from application.models import User, Hashtag
from application.form import *
from werkzeug import secure_filename
import datetime

@app.before_request
def before_request():
    g.user = current_user

@lm.user_loader
def load_user(id):
    return User.query.get(int(id))

# This is the path to the upload directory
app.config['UPLOAD_FOLDER'] = 'uploads/'
# These are the extension that we are accepting to be uploaded
app.config['ALLOWED_EXTENSIONS'] = set(['GIF', 'PNG', 'png', 'jpg', 'JPG', 'jpeg', 'gif', 'JPEG'])

# For a given file, return whether it's an allowed type or not
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Partyork')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated():
        flash('Please logout to register as a new user')
        return redirect(url_for("home", user=g.user))
    
    user = User(request.form['firstname'], request.form['lastname'], 
                request.form['email'],request.form['password'], 
                request.form['zipcode'])
    db.session.add(user)
    db.session.commit()
    flash('Thanks for registering')
    return redirect(url_for('index'))


@app.route('/login', methods=['GET', 'POST'])
def login():
    print "hello"
    if current_user.is_authenticated():
        flash('Already logged in')
        return redirect(url_for("home", user=g.user))

    email = request.form['email']
    password = request.form['password']
    registered_user = User.query.filter_by(email=email).first()
    if registered_user is None:
        flash('Email is invalid' , 'error')
        return redirect(url_for('index'))
    if not registered_user.check_password(password):
        flash('Password is invalid','error')
        return redirect(url_for('index'))
    login_user(registered_user)
    flash('Logged in successfully')
    return redirect(url_for('home'))

@app.route('/user')
def user():
    if current_user.is_authenticated():
        return redirect(url_for("home", username=current_user.firstname))
    else:
        return render_template('info/hello.html', title="Hi Guest!" , user=g.user)

@app.route('/home')
@login_required
def home():
    #user = User.query.filter_by(id=g.user.id).first()
    user = g.user
    return render_template('info/hello.html', title="Hi %s"
                            % (user.firstname), user=user)
@app.route('/load')
def load():
    return render_template('info/upload.html')

# Route that will process the file upload
@app.route('/upload', methods=['POST'])
def upload():
    # Get the name of the uploaded file
    file = request.files['file']
    # Check if the file is one of the allowed types/extensions
    if file and allowed_file(file.filename):
        s = file.filename.split('.')
        ext = s[-1]
        filename = str(g.user.id) + str(datetime.datetime.now()) + '.' + ext
        # Make the filename safe, remove unsupported chars
        filename = secure_filename(filename)
        # Move the file form the temporal folder to
        # the upload folder we setup
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # Redirect the user to the uploaded_file route, which
        # will basicaly show on the browser the uploaded file
        return redirect(url_for('uploaded_file',
                                filename=filename))

    elif not file:
        flash('Please attach a file')
        return redirect(url_for('load'))

    elif not allowed_file(file.filename): 
        flash('File format not allowed. Try again')
        return redirect(url_for('load'))


# This route is expecting a parameter containing the name
# of a file. Then it will locate that file on the upload
# directory and show it on the browser, so if the user uploads
# an image, that image is going to be show after the upload
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(os.path.abspath(app.config['UPLOAD_FOLDER']),
                               filename)

@app.route('/update', methods=['GET', 'POST'])
@login_required
def update():
    form = UpdateForm(request.form)
    user = User.query.filter_by(email=current_user.email).first()
    if request.method == 'POST' and form.validate():
        user.firstname = form.firstname.data
        user.lastname = form.lastname.data
        user.password = form.password.data
        user.zipcode = form.zipcode.data
        user.description = form.description.data
        user.twitter_handle = form.twitter_handle.data 
        user.date_of_birth = form.date_of_birth.data
        user.gender = form.gender.data
        user.relationship_status = form.relationship_status.data

        db.session.add(user)
        db.session.commit()
        flash('Successfully updated user information')
        return redirect(url_for('home'))

    form.firstname.data = user.firstname
    form.lastname.data = user.lastname
    form.password.data = user.password
    form.zipcode.data = user.zipcode
    form.description.data = user.description
    form.twitter_handle.data = user.twitter_handle
    form.date_of_birth.data = user.date_of_birth
    form.gender.data = user.gender
    form.relationship_status.data = user.relationship_status

    return render_template('info/token.html', form=form)

@app.route('/hashtag', methods=['GET', 'POST'])
@login_required
def hashtag():
    form = HashTagForm(request.form)
    disp_hashtag = Hashtag.query.filter_by(user_id=g.user.id).all()
    if request.method == 'POST' and form.validate():
        hashtag = Hashtag(form.hashtag.data)
        hashtag.user_id = g.user.id
        print form.hashtag.data
        db.session.add(hashtag)
        flash('HashTag added')
        db.session.commit()
        return redirect(url_for('hashtag'))
    return render_template('info/hashtag.html', form=form, disp_hashtag=disp_hashtag)

@app.route('/hashtag/delete/<id>', methods=['GET', 'POST'])
@login_required
def delete_hashtag(id):
    del_tag = Hashtag.query.filter_by(id=id).first()
    if del_tag and del_tag.user_id == g.user.id:
        db.session.delete(del_tag)
        db.session.commit()
        flash('HashTag Deleted succesfully')
    return redirect(url_for('hashtag'))

@app.route('/toggle', methods=['GET', 'POST'])
@login_required
def toggle():
    user = User.query.filter_by(id=g.user.id).first()
    if user:
        if user.job_status == True:
            user.job_status = False
        else:
            user.job_status = True
    db.session.add(user)
    db.session.commit()
    flash('Job status changed')
    return redirect(url_for('home'))

@app.route('/logout')
def logout():
    logout_user()
    return redirect('index')
