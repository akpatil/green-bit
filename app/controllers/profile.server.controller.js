var Profile = require('mongoose').model('Profile');

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

exports.create = function(req, res){
	var profile = new Profile(req.body);
	//profile.username = req.user.username;

	profile.save(function(err){
		if(err){
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else {
			res.json(profile);
		}
	});
};

exports.read = function(req, res){
	res.json(req.profile);
};

exports.readByID = function(req, res, next, id){
	Profile.findById(id).exec(function(err, profile){
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
	var profile = new Profile(req.body);
	
	profile.username = req.user.username;
	profile.age = req.body.age;
	profile.gender = req.body.gender;
	profile.bio = req.body.bio;

	profile.save(function(err){
		if(err){
			res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else
			res.json(profile);
	});
};