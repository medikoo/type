"use strict";

var assert    = require("chai").assert
  , ensureSet = require("../../set/ensure");

describe("set/ensure", function () {
	it("Should return input value", function () {
		var value = new Set();
		assert.equal(ensureSet(value), value);
	});
	it("Should crash on no value", function () {
		try {
			ensureSet({});
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "[object Object] is not a set");
		}
	});
	it("Should provide alternative error message when name option is passed", function () {
		try {
			ensureSet(null, { name: "name" });
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "Expected a set for name, received null");
		}
	});
});
