"use strict";

var toShortString = require("./to-short-string");

module.exports = function (message, value) { return message.replace("%v", toShortString(value)); };
