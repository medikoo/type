"use strict";

var assert                   = require("chai").assert
  , isConstructor            = require("../../constructor/is")
  , arrowFunctionIfSupported = require("../_lib/arrow-function-if-supported")
  , classIfSupported         = require("../_lib/class-if-supported");

describe("constructor/is", function () {
	it("Should return true on function", function () {
		assert.equal(isConstructor(function () { return true; }), true);
		assert.equal(isConstructor(eval("(function(){})")), true);
	});
	if (arrowFunctionIfSupported) {
		it("Should return false on arrow function", function () {
			assert.equal(isConstructor(arrowFunctionIfSupported), false);
		});
	}
	if (classIfSupported) {
		it("Should return true on class", function () {
			assert.equal(isConstructor(classIfSupported), true);
		});
	}
	it("Should return false on reg-exp", function () {
		assert.equal(isConstructor(/foo/), false);
	});

	it("Should return false on plain object", function () {
		assert.equal(isConstructor({}), false);
	});
	it("Should return false on array", function () { assert.equal(isConstructor([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isConstructor(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isConstructor("foo"), false); });
	it("Should return false on empty string", function () {
		assert.equal(isConstructor(""), false);
	});
	it("Should return false on number", function () { assert.equal(isConstructor(123), false); });
	it("Should return false on NaN", function () { assert.equal(isConstructor(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isConstructor(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isConstructor(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isConstructor(null), false); });
	it("Should return false on undefined", function () {
		assert.equal(isConstructor(void 0), false);
	});
});
