const express = require('express');
const  app = express();

// Put your answer route here

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

module.exports = app;