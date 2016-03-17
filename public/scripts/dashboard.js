var mongojs =require('mongojs');
var db = mongojs('hostel',['studentdb']);

//retrives the details of the user for the dashboard
exports.getUserDetails = function(req, res) {
	var user = req.body.username;
	db.studentdb.findOne(
		{
			query: {username: user}
		},
		function(err, doc) {
			if(doc) {
				res.json(doc);
			} else {
				res.sendStatus(404);
			}
	});
};

//Sends the count of students in a single userRoom
exports.checkRoomAvailability = function(req, res) {
	var userBlock = req.body.block;
	var userFloor = req.body.floor;
	var userRoom = req.body.room;
	db.studentdb.find({block:userBlock, floor:userFloor, room: userRoom}).
		count(function(err, doc) {
			res.json(doc);
		});
};