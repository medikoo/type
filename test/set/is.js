"use strict";

var assert = require("chai").assert
  , isSet  = require("../../set/is");

describe("set/is", function () {
	if (typeof Set === "function") {
		it("Should return true on set", function () { assert.equal(isSet(new Set()), true); });
	}
	it("Should return false on object that mimicks map", function () {
		assert.equal(
			isSet({
				add: function () { /* noop */ },
				has: function () { /* noop */ },
				clear: function () { /* noop */ }
			}),
			false
		);
	});

	it("Should return false on plain object", function () { assert.equal(isSet({}), false); });
	it("Should return false on function", function () {
		assert.equal(isSet(function () { return true; }), false);
	});
	it("Should return false on array", function () { assert.equal(isSet([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isSet(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isSet("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isSet(""), false); });
	it("Should return false on number", function () { assert.equal(isSet(123), false); });
	it("Should return false on NaN", function () { assert.equal(isSet(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isSet(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isSet(Symbol("foo")), false);
		});
	}
	if (typeof Map === "function") {
		it("Should return false on map", function () { assert.equal(isSet(new Map()), false); });
	}

	it("Should return false on null", function () { assert.equal(isSet(null), false); });
	it("Should return false on undefined", function () { assert.equal(isSet(void 0), false); });
});
