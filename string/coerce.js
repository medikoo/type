"use strict";

var isValue = require("../value/is");

module.exports = function (value) {
	if (!isValue(value)) return null;
	try {
		return "" + value; // Ensureimplicit coercion
	} catch (error) {
		return null;
	}
};
