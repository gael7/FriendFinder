module.exports=function(app, path){
app.get('/api/:friends?', function (req, res) {
  var chosen = req.params.characters;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < friends.length; i++) {
			if (chosen === friends[i].routeName) {
				res.json(friends[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(friends);
	}
});

app.post('/api/new', function (req, res) {
	var newfriend = req.body;
	console.log(newfriend);

	// We then add the json the user sent to the character array
	friends.push(newfriend);

	// We then display the JSON to the users
	res.json(newfriend);
});
};
