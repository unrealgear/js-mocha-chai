'use strict';

const chai = require("chai");

chai.should();
chai.use(require("chai-things"));

describe("Level 0: Test suite", function () {

    it("positive check: check chai-things", async () => {
        await [true, true, true].should.all.equal(true)
    });

    /**
     * Should fail as we check that the test will fail if conditions are not met.
     */
    it("negative check: check chai-things", async () => {
        await [true, false, true].should.all.equal(true)
    });

    /**
     * Will be marked as pending because the test skipped as it only shows examples.
     */
    it.skip("examples from GitHub", async () => {

        // Although they are equal, two different { a: 'cat' } objects are not the same
        [{a: 'cat'}, {a: 'dog'}].should.not.include({a: 'cat'});

        // Chai Things allows us to test deep equality on one of the elements
        [{a: 'cat'}, {a: 'dog'}].should.include.something.that.deep.equals({a: 'cat'});

        // If the test fails, we get a descriptive message
        [{a: 'cat'}, {a: 'dog'}].should.include.something.that.deep.equals({a: 'cow'});

        /* expected an element of [ { a: 'cat' }, { a: 'dog' } ] to deeply equal { a: 'cow' } */

        [4, 11, 15].should.include.one.below(10);
        [4, 11, 15].should.contain.some.above(10);
        [4, 11, 15].should.not.contain.any.above(20);
        [{a: 'cat'}, {a: 'dog'}].should.contain.a.thing.with.property('a', 'cat');
        [{a: 'cat'}, {a: 'dog'}].should.contain.an.item.with.property('a', 'dog');

        // All items are below 20
        [4, 11, 15].should.all.be.below(20);

        // All items have a property 'a'
        [{a: 'cat'}, {a: 'dog'}].should.all.have.property('a');

        // If the test fails, we get a descriptive message
        [4, 11, 15].should.all.be.above(20);

        /* expected all elements of [ 4, 11, 15 ] to be above 20 */
        [{a: 'cat'}, {a: 'dog'}].should.all.have.property('a', 'cat');

        /* expected all elements of [ { a: 'cat' }, { a: 'dog' } ] to have a property 'a' of 'cat', but got 'dog' */
    })
});
