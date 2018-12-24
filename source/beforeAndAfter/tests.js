'use strict';

const chai = require("chai");

chai.should();

describe("Level 0: Test suite", function () {

    before("start app", () => {

        // is not executed for inner describe()
        console.log("*** executed only once before this describe")
    });

    beforeEach("before each 1", () => {
        console.log("+++ before each 1")
    });

    beforeEach("before each 2", () => {
        console.log("+++ before each 2")
    });

    afterEach("after each", () => {
        console.log("--- executed after every test")
    });

    after("close app", () => {

        // is not executed for inner describe()
        console.log("*** executed only once after this describe")
    });

    it("Level 0: First test in tests.js", async () => {
        await true.should.be.true
    });

    it("Level 0: Second test in tests.js", async () => {
        await true.should.be.true
    });

    it("Level 0: Third test in tests.js", async () => {
        await true.should.be.true
    });

    describe("Level 1: Inner test suite", function () {

        before("start inner app", () => {

            // executed only for inner describe()
            console.log("&&& executed only once before inner describe")
        });

        it("Level 1: First test in tests.js", async () => {
            await true.should.be.true
        });

        it("Level 1: Second test in tests.js", async () => {
            await true.should.be.true
        });

        it("Level 1: Third test in tests.js", async () => {
            await true.should.be.true
        });
    })
});
