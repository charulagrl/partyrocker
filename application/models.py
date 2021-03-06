from application import db
import datetime
#
#Create your own models here and they will be imported automaticaly. or
#use a model per blueprint.


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(80))
    lastname = db.Column(db.String(80))
    email = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(80))
    zipcode = db.Column(db.Integer)
    description = db.Column(db.String(120), nullable=False)
    twitter_handle = db.Column(db.String(80), nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    gender = db.Column(db.String(80), nullable=False)
    relationship_status = db.Column(db.String(), nullable=False)

    def __init__(self, firstname, lastname, email, password, zipcode):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password
        self.zipcode = zipcode
        self.description = ''
        self.twitter_handle = ''
        self.date_of_birth = datetime.date.today()
        self.gender = ''
        self.relationship_status = ''

    def set_password(self, password):
        self.password = password

    def check_password(self, password):
        if self.password == password:
            return True

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return unicode(self.id)

    def __repr__(self):
        return '<User %r>' % (self.email)

class Hashtag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tag = db.Column(db.String(100))
    user_id = db.Column(db.Integer)

    def __init__(self, tag):
        self.tag = tag

class AlreadyFollow(db.Model):
    id = db.Column(db.Integer, primary_key=True)

class Log(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    hostname = db.Column(db.String(20))
    flagger = db.Column(db.Boolean)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', backref='log', lazy='')

    def __init__(self, time, uptime, hostname, flagger, user_id):
        self.returns = 0
        self.errors = 0
        self.time = time
        self.hostname = hostname
        self.flagger = flagger
        self.user_id = user_id

    def __repr__(self):
        return '<Log %r>' % (self.hostname)
