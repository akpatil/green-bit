var Profile = require('../controllers/profile.server.controller');

module.exports = function(app){
	app.route('/api/user').get(Profile.list);
	app.route('/api/user/:userId').get(Profile.read).put(Profile.update);
	app.param('userId', Profile.readByID);
};