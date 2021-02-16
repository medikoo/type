"use strict";

var assert = require("chai").assert
  , isMap  = require("../../map/is");

describe("map/is", function () {
	if (typeof Map === "function") {
		it("Should return true on map", function () { assert.equal(isMap(new Map()), true); });
	}
	it("Should return false on object that mimicks map", function () {
		assert.equal(
			isMap({
				get: function () { /* noop */ },
				set: function () { /* noop */ },
				has: function () { /* noop */ },
				clear: function () { /* noop */ }
			}),
			false
		);
	});

	it("Should return false on plain object", function () { assert.equal(isMap({}), false); });
	it("Should return false on function", function () {
		assert.equal(isMap(function () { return true; }), false);
	});
	it("Should return false on array", function () { assert.equal(isMap([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isMap(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isMap("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isMap(""), false); });
	it("Should return false on number", function () { assert.equal(isMap(123), false); });
	it("Should return false on NaN", function () { assert.equal(isMap(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isMap(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isMap(Symbol("foo")), false);
		});
	}
	if (typeof Set === "function") {
		it("Should return false on set", function () { assert.equal(isMap(new Set()), false); });
	}

	it("Should return false on null", function () { assert.equal(isMap(null), false); });
	it("Should return false on undefined", function () { assert.equal(isMap(void 0), false); });
});
