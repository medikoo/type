"use strict";

var isObject      = require("../object/is")
  , stringCoerce  = require("../string/coerce")
  , toShortString = require("./to-short-string");

module.exports = function (errorMessage, value, inputOptions) {
	if (isObject(inputOptions) && inputOptions.errorMessage) {
		errorMessage = stringCoerce(inputOptions.errorMessage);
	}
	return errorMessage.replace("%v", toShortString(value));
};
