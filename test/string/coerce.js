"use strict";

var assert       = require("chai").assert
  , stringCoerce = require("../../string/coerce");

describe("string/coerce", function () {
	it("Should return input string", function () { assert.equal(stringCoerce("foo"), "foo"); });
	it("Should coerce numbers", function () { assert.equal(stringCoerce(12), "12"); });
	it("Should coerce booleans", function () { assert.equal(stringCoerce(true), "true"); });
	it("Should coerce string objects", function () {
		assert.equal(stringCoerce(new String("bar")), "bar");
	});
	it("Should coerce objects", function () {
		assert.equal(
			stringCoerce({ toString: function () { return "Some object"; } }), "Some object"
		);
	});
	it("Should not coerce null", function () { assert.equal(stringCoerce(null), null); });
	it("Should not coerce undefined", function () { assert.equal(stringCoerce(undefined), null); });

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			// eslint-disable-next-line no-undef
			assert.equal(stringCoerce(Symbol()), null);
		});
	}
});
