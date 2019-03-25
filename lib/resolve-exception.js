"use strict";

var isValue       = require("../value/is")
  , isObject      = require("../object/is")
  , stringCoerce  = require("../string/coerce")
  , toShortString = require("./to-short-string");

var resolveMessage = function (message, value) {
	return message.replace("%v", toShortString(value));
};

module.exports = function (value, defaultMessage, inputOptions) {
	if (!isObject(inputOptions)) throw new TypeError(resolveMessage(defaultMessage, value));
	if (inputOptions.isOptional && !isValue(value)) return null;
	var errorMessage = stringCoerce(inputOptions.errorMessage);
	if (!isValue(errorMessage)) errorMessage = defaultMessage;
	throw new TypeError(resolveMessage(errorMessage, value));
};
