"use strict";

var assert              = require("chai").assert
  , ensurePlainFunction = require("../../plain-function/ensure");

describe("plain-function/ensure", function () {
	it("Should return input value", function () {
		var value = function () { return true; };
		assert.equal(ensurePlainFunction(value), value);
	});
	it("Should crash on invalid value", function () {
		try {
			ensurePlainFunction(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert(error.message.includes("is not a plain function"));
		}
	});
	it("Should provide alternative error message when name option is passed", function () {
		try {
			ensurePlainFunction(null, { name: "name" });
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "Expected a plain function for name, received null");
		}
	});
});
