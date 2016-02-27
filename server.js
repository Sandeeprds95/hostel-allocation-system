var express = require('express');
var app = express();
var mongojs =require('mongojs');
var db = mongojs('hostel',['login']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.post('/', function(req, res) {
	console.log("I'm inside login POST");
	//console.log(req.body);
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
});


/*
app.get('/contactlist', function(req, res) {
  	console.log("I received a GET request from client!");

  	db.contactlist.find(function(err, docs) {
  		console.log(docs);
  		res.json(docs);
  	});
});

app.post('/contactlist', function(req, res) {
	console.log('I received a POST request from Client!');
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc) {
		res.json(doc);
	})
});

app.delete('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.put('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
		new: true}, function(err, doc) {
			res.json(doc);
		});
});
*/
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});