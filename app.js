const express = require('express');
const app = express();

// Put your answer route here
app.get('/', (req, res) => res.send("Hello World !!"));

app.listen(3000, () => console.log("Port 3000 initialized and ready!");

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

module.exports = app;