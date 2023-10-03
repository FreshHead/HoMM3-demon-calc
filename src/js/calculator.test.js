import { test, describe, expect } from "@jest/globals";
import * as calc from "./calculator.js";

const testData = [
    {
        name: "3 pitlords and 15 imps",
        data: [3, 15, 4],
        expectedDemonsNumber: 1,
        expectedOptimalNumber: 9
    },
    {
        name: "demons into demons",
        data: [3, 5, 35],
        expectedDemonsNumber: 4,
        expectedOptimalNumber: 4
    },
    {
        name: "Case when demons by pitlords is BIGGER then by creatures",
        data: [25, 100, 4],
        expectedDemonsNumber: 11,
        expectedOptimalNumber: 97
    },
    {
        name: "Case when demons by pitlords is LESS then demons by creatures",
        data: [4, 100, 4],
        expectedDemonsNumber: 5,
        expectedOptimalNumber: 44
    },
    {
        name: "Check that demons is does not more than creatures",
        data: [10, 5, 80],
        expectedDemonsNumber: 5,
        expectedOptimalNumber: 5
    },
    {
        name: "Case when creatures is not enough for one demon",
        data: [10, 11, 3],
        expectedDemonsNumber: 0,
        expectedOptimalNumber: 0
    },
    {
        name: "Case when creatures is just enough for one demon",
        data: [10, 7, 5],
        expectedDemonsNumber: 1,
        expectedOptimalNumber: 7
    },
    {
        name: "Creatures a little bit more for one demon",
        data: [10, 36, 1],
        expectedDemonsNumber: 1,
        expectedOptimalNumber: 35
    },
    {
        name: "Creatures a little bit more for one demon",
        data: [10, 36, 1],
        expectedDemonsNumber: 1,
        expectedOptimalNumber: 35
    },
    {
        name: "All zeroes",
        data: [0, 0, 0],
        expectedDemonsNumber: 0,
        expectedOptimalNumber: 0
    },
    {
        name: "Zero pitlords",
        data: [0, 10, 10],
        expectedDemonsNumber: 0,
        expectedOptimalNumber: 0
    },
    {
        name: "Zero creatures",
        data: [10, 0, 10],
        expectedDemonsNumber: 0,
        expectedOptimalNumber: 0
    },
    {
        name: "Zero creature hp",
        data: [10, 10, 0],
        expectedDemonsNumber: 0,
        expectedOptimalNumber: 0
    },
    {
        name: "A lot of everything",
        data: [9999, 9999, 9999],
        expectedDemonsNumber: 9999,
        expectedOptimalNumber: 9999
    },
];

describe.each(testData)("getDemonsNumber()",
    ({ name, data, expectedDemonsNumber }) => test(name, () =>
        expect(calc.getDemonsNumber(...data)).toBe(expectedDemonsNumber)
    )
);

describe.each(testData)("getOptimalDemonsNumber()",
    ({ name, data, expectedDemonsNumber, expectedOptimalNumber }) =>
        test(name, () =>
            expect(calc.getOptimalNumber(...data, expectedDemonsNumber)).toBe(expectedOptimalNumber)
        )
);
