"use strict";

var assert       = require("chai").assert
  , ensureRegExp = require("../../reg-exp/ensure");

describe("reg-exp/ensure", function () {
	it("Should return input value", function () {
		var value = /foo/;
		assert.equal(ensureRegExp(value), value);
	});
	it("Should crash on invalid value", function () {
		try {
			ensureRegExp(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert(error.message.includes("is not a regular expression"));
		}
	});
	it("Should provide alternative error message when name option is passed", function () {
		try {
			ensureRegExp(null, { name: "name" });
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "Expected a regular expression for name, received null");
		}
	});
});
