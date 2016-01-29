exports.render = function(req, res){
	res.render('index', {
		title: 'Index Page',
		user: JSON.stringify(req.user)
	});
};