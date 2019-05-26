const express = require('express');
const app = express();
var datafile = require("/home/root/work/express-prep-course/datafiles.json");

// Put your answer route here
// app.get('/', (req, res) => res.send("Hello World !!"));
app.get('/me', (req, res) => res.send(datafile));

/* app.get('/me', (req, res) => res.json({
    	"Name":"Yugo Gautomo",
    	"Email": "y_gautomo@yahoo.com",
    	"Occupation": "Refactory Student"
 	}) ); */

app.listen(3000, () => console.log("Port 3000 initialized and ready!"));

app.use(function(req, res, next) {
		let err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

module.exports = app;