"use strict";

var isValue             = require("../value/is")
  , isObject            = require("../object/is")
  , stringCoerce        = require("../string/coerce")
  , resolveErrorMessage = require("./resolve-error-message");

module.exports = function (value, defaultMessage, inputOptions) {
	if (!isObject(inputOptions)) throw new TypeError(resolveErrorMessage(defaultMessage, value));
	if (!isValue(value)) {
		if ("default" in inputOptions) return inputOptions["default"];
		if (inputOptions.isOptional) return null;
	}
	var errorMessage = stringCoerce(inputOptions.errorMessage);
	if (!isValue(errorMessage)) errorMessage = defaultMessage;
	throw new TypeError(resolveErrorMessage(errorMessage, value));
};
