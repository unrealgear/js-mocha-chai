'use strict';

const chai = require("chai");
const extractedTests = require("./extractedTests");

chai.should();

describe("Level 0: Test suite", function () {

    it("Level 0: First test in tests.js", async () => {
        await true.should.be.true
    });

    // Look here ->
    extractedTests.testsToRun();

    it("Level 0: Second test in tests.js", async () => {
        await true.should.be.true
    });
});
