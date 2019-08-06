"use strict";

var isPrototype = require("../prototype/is");

var objectToString = Object.prototype.toString;

// Recognized host specific errors (e.g. DOMException)
var errorTaggedStringRe = /^\[object .*(?:Error|Exception)\]$/;

module.exports = function (value) {
	if (!value) return false;

	// Sanity check (reject objects which do not expose common Error interface)
	try {
		if (typeof value.message !== "string") return false;
	} catch (error) {
		return false;
	}

	// Ensure its native Error object (has [[ErrorData]] slot)
	// Note: There seems no 100% bulletproof way of doing that as:
	// - In ES2015+ string tag can be overriden via Symbol.toStringTag
	// - Host errors do not share native error tag. Still we rely on assumption that
	//   tag for each error will end either with `Error` or `Exception` string
	if (!errorTaggedStringRe.test(objectToString.call(value))) return false;

	return !isPrototype(value);
};
