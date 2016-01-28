var User = require('../controllers/user.server.controller');
var passport = require('passport');

module.exports = function(app){
	app.route('/api/user').get(User.list).post(User.create);
	app.route('/api/user/:userID').get(User.read).put(User.update).delete(User.delete);
	app.param('userID', User.readByID);

	app.route('/signup').get(User.renderSignup).post(User.signup);
	app.route('/signin').get(User.renderSignin).post(passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/signin',
		failureFlash: true
	}));
	app.route('/signout').get(User.logout);
};