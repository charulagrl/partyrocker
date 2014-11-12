from wtforms import Form, TextField, BooleanField, PasswordField, DateField, IntegerField, PasswordField, TextAreaField, validators, SubmitField
from application.models import User
from flask.ext.login import login_user

class RegistrationForm(Form):
    username = TextField('Username', [validators.Length(min=4, max=25)])
    email = TextField('Email Address', [validators.Length(min=6, max=35)])
    password = PasswordField('New Password', [
        validators.Required(),
        validators.EqualTo('confirm', message='Passwords must match')
    ])
    confirm = PasswordField('Repeat Password')
    accept_tos = BooleanField('I accept the TOS', [validators.Required()])


class UpdateForm(Form):
    firstname = TextField('First Name', validators=[validators.Required()])
    lastname = TextField('Last Name', validators=[validators.Required()])
    password = PasswordField('Password', validators=[validators.Required()])
    zipcode = IntegerField('Zipcode', validators=[validators.Required()])
    description = TextField('Description', validators=[validators.Required()])
    twitter_handle = TextField('Twitter Handle', validators=[validators.Required()])
    date_of_birth = DateField('Date of Birth (mm/dd/yyyy)',validators=[validators.required()],format='%m/%d/%Y')
    gender = TextField('Gender', validators=[validators.Required()])
    relationship_status = TextField('Relationship Status', validators=[validators.Required()])

class HashTagForm(Form):
    hashtag = TextField('Hash Tags', validators=[validators.Required()])

try:
	from flask.ext.wtf import Form
except ImportError:
	print "Not WTF module"

class LoginForm(Form):
    username = TextField('Username')
    password = PasswordField('Password')

    def __init__(self, *args, **kwargs):
        Form.__init__(self, *args, **kwargs)
        self.user = None

    def validate(self):
        rv = Form.validate(self)
        if not rv:
            return False

        user = User.query.filter_by(
            username=self.username.data).first()

        if user is None:
            self.username.errors.append('Unknown username')
            return False

        if not user.check_password(self.password.data):
            self.password.errors.append('Invalid password')
            return False

        self.user = user
        login_user(user)

        return True


