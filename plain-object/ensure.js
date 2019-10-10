"use strict";

var resolveException    = require("../lib/resolve-exception")
  , resolveErrorMessage = require("../lib/resolve-error-message")
  , ensureArray         = require("../array/ensure")
  , is                  = require("./is");

var objHasOwnProperty = Object.prototype.hasOwnProperty
  , invalidItemsLimit = 3
  , defaultErrorMessage = "%v is not a valid plain object";

module.exports = function (value/*, options*/) {
	var options = arguments[1];
	if (!is(value)) return resolveException(value, defaultErrorMessage, options);
	if (!options) return value;

	var allowedKeys = ensureArray(options.allowedKeys, { isOptional: true });
	if (allowedKeys) {
		var invalidKeys;
		for (var key in value) {
			if (!objHasOwnProperty.call(value, key)) continue;
			if (allowedKeys.indexOf(key) > -1) continue;
			if (!invalidKeys) invalidKeys = [];
			if (invalidKeys.push(key) === invalidItemsLimit) break;
		}
		if (invalidKeys) {
			var errorMessage =
				resolveErrorMessage(defaultErrorMessage, value, options) +
				".\n           Following keys are unexpected: " +
				invalidKeys.join(", ");
			throw new TypeError(errorMessage);
		}
	}

	return value;
};
