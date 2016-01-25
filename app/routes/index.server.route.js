var Index = require('../controllers/index.server.controller');

module.exports = function(app){
	app.route('/').get(Index.render);
}