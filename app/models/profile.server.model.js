var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProfileSchema = new Schema({
	username: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	age: {
		type: String
	},
	gender: {
		type: String
	},
	bio: {
		type: String, 
		default: '',
		trim: true
	}
});

mongoose.model('Profile', ProfileSchema);