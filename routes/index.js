var projects = require('../projects.json');

exports.view = function(req, res){
	projects['grid'] = false;
	res.render('index', projects);
};

exports.viewGrid = function(req, res){
	projects['grid'] = true;
	res.render('index', projects);
};
