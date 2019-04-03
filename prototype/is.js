"use strict";

var isObject = require("../object/is");

module.exports = function (value) {
	if (!isObject(value)) return false;
	if (!value.constructor) return false;
	return value.constructor.prototype === value;
};
