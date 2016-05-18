'use strict';

module.exports = function (config) {
  const password = config.password;
  const zxcvbn = require('zxcvbn');
  return zxcvbn(password);
};
