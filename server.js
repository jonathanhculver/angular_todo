var express = require("express"),
	app = express(),
	path = require('path'),
	ejs = require('ejs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(process.env.PORT || 5000, function() {
	console.log("Listening on port "+ this.address().port);
});