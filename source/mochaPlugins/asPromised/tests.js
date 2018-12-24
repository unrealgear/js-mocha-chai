'use strict';

const chai = require("chai");

chai.should();
chai.use(require("chai-as-promised"));

describe("Level 0: Test suite", function () {

    /**
     * Will be marked as pending because the test skipped as it only shows examples.
     */
    it.skip("examples with should", async () => {
        await promise.should.eventually.equal(true);
        await promise.should.be.fulfilled;
        await promise.should.eventually.deep.equal("foo");
        await promise.should.become("foo"); // same as `.eventually.deep.equal`
        await promise.should.be.rejected;
        await promise.should.be.rejectedWith(Error); // other variants of Chai's `throw` assertion work too.
    });

    /**
     * Will be marked as pending because the test skipped as it only shows examples.
     */
    it.skip("examples with assert", async () => {
        await assert.eventually.equal(Promise.resolve(2 + 2), 4, "This had better be true, eventually");
        await assert.isFulfilled(promise, "optional message");

        await assert.becomes(promise, "foo", "optional message");
        await assert.doesNotBecome(promise, "foo", "optional message");

        await assert.isRejected(promise, "optional message");
        await assert.isRejected(promise, Error, "optional message");
        await assert.isRejected(promise, /error message matcher/, "optional message");
    });
});
