import calc from "../src/js/calculator.mjs";
import assert from "assert/strict";
// Use Node to run this simple tests.

{ // getDemonsNumberTest block.
    const tests = [
        [[3, 15, 40], 1, "3 pitlords and 15 imps"],
        [[25, 100, 40], 11, "25 pitlords and 100 gremlins"] // example from https://homm3sod.ru/demonologiya/.
    ];

    for (const test of tests) {
        const [params, exptected, name] = test;
        try {
            assert.strictEqual(calc.getDemonsNumber(...params), exptected, name);
        } catch (err) {
            console.log(err);
        }
    }

}