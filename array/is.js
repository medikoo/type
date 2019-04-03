"use strict";

var isPrototype = require("../prototype/is");

var isArray;
if (typeof Array.isArray === "function") {
	isArray = Array.isArray;
} else {
	var objectToString = Object.prototype.toString, objectTaggedString = objectToString.call([]);
	isArray = function (value) { return objectToString.call(value) === objectTaggedString; };
}

module.exports = function (value) {
	if (!isArray(value)) return false;

	// Sanity check (reject objects which do not expose common Array interface)
	if (typeof value.push !== "function") return false;
	if (typeof value.pop !== "function") return false;
	if (typeof value.splice !== "function") return false;

	return !isPrototype(value);
};
