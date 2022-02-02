"use strict";

var assert            = require("chai").assert
  , ensureConstructor = require("../../constructor/ensure");

describe("constructor/ensure", function () {
	it("Should return input value", function () {
		var value = function () { return true; };
		assert.equal(ensureConstructor(value), value);
	});
	it("Should crash on invalid value", function () {
		try {
			ensureConstructor(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert(error.message.includes("is not a constructor function"));
		}
	});
	it("Should provide alternative error message when name option is passed", function () {
		try {
			ensureConstructor(null, { name: "name" });
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "Expected a constructor function for name, received null");
		}
	});
});
