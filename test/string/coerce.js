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
	if (typeof Object.create === "function") {
		it("Should not coerce objects with no toString", function () {
			assert.equal(stringCoerce(Object.create(null)), null);
		});
	}
	it("Should not coerce objects with no custom toString", function () {
		assert.equal(stringCoerce({}), null);
	});
	it("Should not coerce null", function () { assert.equal(stringCoerce(null), null); });
	it("Should not coerce undefined", function () { assert.equal(stringCoerce(undefined), null); });

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(stringCoerce(Symbol("foo")), null);
		});
	}
});
