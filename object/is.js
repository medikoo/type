"use strict";

var isValue = require("../value/is");

module.exports = function (value) {
	if (!isValue(value)) return false;
	var type = typeof value;
	return type === "object" || type === "function" || type === "undefined"; // document.all
};
