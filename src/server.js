'use strict';

module.exports = function (config) {
  const express = require('express');
  const bodyParser = require('body-parser');
  const passwordStrength = require('./password_strength.js');
  const http = require('http');
  const app = express();
  const jsonParser = bodyParser.json();
  const port = config.port;
  const server = http.createServer(app);

  server.start = function () {
    app.listen(port, '0.0.0.0');
  };

  app.post('/password_strength', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const password = req.body.password;
    res.send({ result: passwordStrength({ password: password }) });
  });

  return server;
};
