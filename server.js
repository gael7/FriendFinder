//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//Sets up the express app
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/app'));

var html=require('./app/routing/html-routes')(app, path);
var api=require('./app/routing/api-routes')(app, path);

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
