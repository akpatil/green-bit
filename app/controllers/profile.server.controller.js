var User = require('mongoose').model('User');

var getErrorMessage = function(err){
	if(err.errors){
		for(var errName in err.errors){
			if(err.errors[errName].message){
				return err.errors[errName].message;
			}
		}
	}
	else{
		return 'Unknown server error';
	}
};

exports.list = function(req, res, next){
	User.find().exec(function(err, users){
		if(err){
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else {
			res.json(users);
		}
	});
};

exports.read = function(req, res){
	res.json(req.user);
};

exports.readByID = function(req, res, next, id){
	User.findById(id).exec(function(err, profile){
		if(err){
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		req.profile = profile;
		next();
	});
};

exports.update = function(req, res, next){
	var user = new User(req.body);

	user.firstName = req.body.firstName;
	user.lastName = req.body.lastName;
	user.age = req.body.age;
	user.gender = req.body.gender;
	user.bio = req.body.bio;

	user.save(function(err){
		if(err){
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else
			res.json(user);
	});
};