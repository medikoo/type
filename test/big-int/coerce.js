"use strict";

var assert         = require("chai").assert
  , coerceToBigInt = require("../../big-int/coerce");

describe("big-int/coerce", function () {
	it("Should return input bigint", function () {
		assert.equal(coerceToBigInt(BigInt(0)), coerceToBigInt(BigInt(0)));
	});
	it("Should coerce numbers", function () { assert.equal(coerceToBigInt(12), BigInt(12)); });
	it("Should coerce booleans", function () { assert.equal(coerceToBigInt(true), BigInt(true)); });
	it("Should not coerce null", function () { assert.equal(coerceToBigInt(null), null); });
	it("Should not coerce undefined", function () {
		assert.equal(coerceToBigInt(undefined), null);
	});
});
