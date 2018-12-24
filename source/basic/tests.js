'use strict';

const chai = require("chai");

chai.should();

describe("Test suite", function () {

    it("Test with await", async () => {
        await true.should.be.true
    });

    it("Test with return", () => {
        return true.should.be.true
    });

    it("Test without await and return", () => {
        true.should.be.true
    });
});
