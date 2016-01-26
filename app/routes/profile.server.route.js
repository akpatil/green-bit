var Profile = require('../controllers/profile.server.controller');

module.exports = function(app){
	app.route('api/profile').post();
	app.route('/api/profile/:profileId').get(Profile.read).put(Profile.update);
	app.param('profileId', Profile.readByID);
};