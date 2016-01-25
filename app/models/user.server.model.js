var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		default: '',
		required: 'Firstname cannot be blank'
	},
	lastName: {
		type: String,
		trim: true,
		default: '',
		required: 'Lastname cannot be blank'
	},
	email: {
		type: String,
		default: '',
		match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
	},
	username: {
		type: String,
		trim: true,
		default: '',
		required: 'Username cannot be blank'
	},
	password: {
		type: String,
		validate: [function(password){
			return password && password.length > 6;
		}, 'Password length should be greater than 6 characters']
	},
	salt: {
		type: String
	},
	provider: {
		type:String,
		required: 'Provider is required'
	},
	providerId: {
		type: String
	},
	providerData: {},
	created: {
		type: Date,
		default: Date.now
	}
});

UserSchema.virtual('fullname').get(function(){
	return this.firstName + ' ' + this.lastName;
}).set(function(fullname){
	var splitName = fullname.split(' ');
	firstName = splitName[0] || '';
	lastName = splitName[1] || '';
});

UserSchema.pre('save', function(next){
	if(this.password){
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}
	next();
});

UserSchema.methods.hashPassword = function(password){
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function(password){
	return this.password === this.hashPassword(password);
};

UserSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

mongoose.model('User', UserSchema);