var mongojs =require('mongojs');
var db = mongojs('hostel',['studentdb']);

//retrives the details of the user for the dashboard
exports.getUserDetails = function(req, res) {
	console.log("I'm inside dashboard GET");
	var user = req.body.username;
	console.log(user);
	db.studentdb.findOne(
		{
			query: {username: user}
		},
		function(err, doc) {
			if(doc) {
				console.log(doc);
				res.json(doc);
			} else {
				res.sendStatus(404);
			}
	});
};

exports.checkRoomAvailability = function(req, res) {
	var userBlock = req.body.block;
	var userFloor = req.body.floor;
	var userRoom = req.body.room;
	console.log(userBlock + " " + userFloor + " " + userRoom);
	db.studentdb.find({block:userBlock, floor:userFloor, room: userRoom}).
		count(function(err, doc) {
			console.log(doc);
			res.json(doc);
		});
};