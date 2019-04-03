"use strict";

var assert       = require("chai").assert
  , numberCoerce = require("../../number/coerce");

describe("number/coerce", function () {
	it("Should return input number", function () { assert.equal(numberCoerce(123.123), 123.123); });
	it("Should return input infinite number", function () {
		assert.equal(numberCoerce(Infinity), Infinity);
	});
	it("Should coerce string", function () { assert.equal(numberCoerce("12"), 12); });
	it("Should coerce booleans", function () { assert.equal(numberCoerce(true), 1); });
	it("Should coerce number objects", function () {
		assert.equal(numberCoerce(new Number(343)), 343);
	});
	it("Should coerce objects", function () {
		assert.equal(numberCoerce({ valueOf: function () { return 23; } }), 23);
	});

	it("Should reject NaN", function () { assert.equal(numberCoerce(NaN), null); });

	if (typeof Object.create === "function") {
		it("Should not coerce objects with no number representation", function () {
			assert.equal(numberCoerce(Object.create(null)), null);
		});
	}

	it("Should not coerce null", function () { assert.equal(numberCoerce(null), null); });
	it("Should not coerce undefined", function () { assert.equal(numberCoerce(undefined), null); });

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(numberCoerce(Symbol("foo")), null);
		});
	}
});
