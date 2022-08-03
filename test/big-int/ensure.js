"use strict";

var assert       = require("chai").assert
  , ensureBigInt = require("../../big-int/ensure");

describe("big-int/ensure", function () {
	it("Should return coerced value", function () { assert.equal(ensureBigInt(12), BigInt(12)); });
	it("Should crash on no value", function () {
		try {
			ensureBigInt(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "null is not a bigint");
		}
	});
	it("Should provide alternative error message when name option is passed", function () {
		try {
			ensureBigInt(null, { name: "name" });
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "Expected bigint for name, received null");
		}
	});
});
