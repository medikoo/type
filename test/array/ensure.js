"use strict";

var assert       = require("chai").assert
  , ensureString = require("../../string/ensure")
  , ensureArray  = require("../../array/ensure");

describe("array/ensure", function () {
	it("Should return input value", function () {
		var value = [];
		assert.equal(ensureArray(value), value);
	});
	it("Should crash on invalid value", function () {
		try {
			ensureArray(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "null is not an array");
		}
	});
	it("Should provide alternative error message when name option is passed", function () {
		try {
			ensureArray(null, { name: "name" });
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "Expected an array for name, received null");
		}
	});

	it("Should support ensureItem option", function () {
		assert.deepEqual(ensureArray(["bar", 12], { ensureItem: ensureString }), ["bar", "12"]);
		try {
			ensureArray(["bar", {}], { ensureItem: ensureString });
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message.indexOf("is not an array") !== -1, true);
		}
	});
});
