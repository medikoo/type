"use strict";

var resolveException = require("../lib/resolve-exception")
  , is               = require("./is");

module.exports = function (value/*, options*/) {
	var options = arguments[1];
	if (is(value, options)) return value;
	return resolveException(value, "%v is not expected iterable value", options);
};
