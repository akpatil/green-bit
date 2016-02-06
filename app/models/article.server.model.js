var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Title is required'
	},
	content: {
		type: String,
		default: ''
	},
	created: {
		type: Date,
		default: Date.now
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ArticleSchema);