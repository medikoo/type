"use strict";

var assert    = require("chai").assert
  , ensureMap = require("../../map/ensure");

describe("map/ensure", function () {
	it("Should return input value", function () {
		var value = new Map();
		assert.equal(ensureMap(value), value);
	});
	it("Should crash on no value", function () {
		try {
			ensureMap({});
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "[object Object] is not a map");
		}
	});
	it("Should provide alternative error message when name option is passed", function () {
		try {
			ensureMap(null, { name: "name" });
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "Expected a map for name, received null");
		}
	});
});
