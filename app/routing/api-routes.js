var data=require('../data/friends.js');
var friends=data.friends;

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
	var newFriend = req.body;


	friends.push(newFriend);
  	console.log(friends);
	res.json(newFriend);
});
};
