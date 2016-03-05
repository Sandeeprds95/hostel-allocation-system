var mongojs =require('mongojs');
var db = mongojs('hostel',['login']);

//checks if the user exists in the DB
exports.checkUser = function(req, res) {
	console.log("I'm inside login POST");
	console.log(req.body);
	var user = req.body.username;
	var pass = req.body.password;
	db.login.findOne(
		{query: {username: user, password : pass}},
		function(err, doc) {
			if(doc) {
				//console.log(doc._id);
				res.json(doc);
			} else {
				res.sendStatus(404);
			}
	});
};