var mongojs =require('mongojs');
var db = mongojs('hostel',['login']);

//checks if the user exists in the DB
exports.checkUser = function(req, res) {
	var user = req.body.username;
	var pass = req.body.password;
	db.login.findOne(
		{query: {username: user, password : pass}},
		function(err, doc) {
			if(doc) {
				res.json(doc);
			} else {
				res.sendStatus(404);
			}
	});
};