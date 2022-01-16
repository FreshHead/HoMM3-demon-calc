import calc from "../src/js/calculator.js";
import assert from "assert/strict";
// Use Node to run this simple tests.

{ // getDemonsNumberTest block.
    console.log("Started getDemonsNumberTest() tests.");
    const tests = [
        [[3, 15, 4], 1, "3 pitlords and 15 imps"],
        [[3, 5, 35], 4, "demons into demons"],
        [[2, 5, 35], 2, "Pitlords is just for 2 demons"],
        [[25, 100, 4], 11, "Case when demons by pitlords is BIGGER then by creatures"], // example from https://homm3sod.ru/demonologiya/.
        [[4, 100, 4], 5, "Case when demons by pitlords is LESS then demons by creatures"],
        [[10, 5, 80], 5, "Check that demons is does not more than creatures"],
        [[10, 11, 3], 0, "Case when creatures is not enough for one demon"],
        [[10, 7, 5], 1, "Case when creatures is just enough for one demon"],
        [[10, 36, 1], 1, "Creatures a little bit more for one demon"],
        [[0, 0, 0], 0, "All zeroes"],
        [[0, 10, 10], 0, "Zero pitlords"],
        [[10, 0, 10], 0, "Zero creatures"],
        [[10, 10, 0], 0, "Zero creature hp"],
        [[9999, 9999, 9999], 9999, "A lot of everything"],
    ];

    for (const test of tests) {
        const [params, exptected, name] = test;
        try {
            console.log("Started: " + name + " test.");
            assert.strictEqual(calc.getDemonsNumber(...params), exptected, name);
        } catch (err) {
            console.log(err);
        }
    }
}

{ // getOptimalNumber block.
    console.log("\nStarted getOptimalNumber() tests.");
    const tests = [
        [[3, 15, 4, 1], 9, "3 pitlords and 15 imps"],
        [[3, 5, 35, 4], 4, "demons into demons"],
        [[2, 5, 35, 2], 2, "Pitlords is just for 2 demons"],
        [[25, 100, 4, 11], 97, "Case when demons by pitlords is BIGGER then by creatures"], // example from https://homm3sod.ru/demonologiya/.
        [[4, 100, 4], 44, "Case when demons by pitlords is LESS then demons by creatures"],
        [[10, 5, 80, 5], 5, "Check that demons is does not more than creatures"],
        [[10, 11, 3, 0], 0, "Case when creatures is not enough for one demon"],
        [[10, 7, 5, 1], 7, "Case when creatures is just enough for one demon"],
        [[10, 36, 1, 1], 35, "Creatures a little bit more for one demon"],
        [[0, 0, 0, 0], 0, "All zeroes"],
        [[0, 10, 10, 0], 0, "Zero pitlords"],
        [[10, 0, 10, 0], 0, "Zero creatures"],
        [[10, 10, 0, 0], 0, "Zero creature hp"],
        [[9999, 9999, 9999, 9999], 9999, "A lot of everything"],
    ];

    for (const test of tests) {
        const [params, exptected, name] = test;
        try {
            console.log("Started: " + name + " test.");
            assert.strictEqual(calc.getOptimalNumber(...params), exptected, name);
        } catch (err) {
            console.log(err);
        }
    }

}