var Article = require('../controllers/article.server.controller');
var User = require('../controllers/user.server.controller');

module.exports = function(app){
	app.route('/api/article').get(Article.list).post(User.requiresLogin, Article.create);
	app.route('/api/article/:articleId').get(Article.read).put(User.requiresLogin, Article.hasAuthorization, Article.update).delete(User.requiresLogin, Article.hasAuthorization, Article.delete);
	app.param('articleId', Article.readByID);
};