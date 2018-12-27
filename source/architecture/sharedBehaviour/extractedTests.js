// even though should is not declared, tests will get should from the class where they will be executed

exports.testsToRun = function () {
    describe("Level 1: Test name", function () {
        it("Level 1: First test in ", async () => {
            await true.should.be.true
        });

        it("Level 1: Second test in shared test", async () => {
            await true.should.be.true
        });

        it("Level 1: Third test in shared test", async () => {
            await true.should.be.true
        });

        describe("Level 2: Inner test name", function () {
            it("Level 2: First test inside 'Inner test name'", async () => {
                await true.should.be.true
            });

            it("Level 2: Second test inside 'Inner test name'", async () => {
                await true.should.be.true
            })
        });
    })
};
