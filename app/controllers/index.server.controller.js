exports.render = function(req, res){
	res.render('index', {
		title: 'Index Page',
		user: req.user
	});
};