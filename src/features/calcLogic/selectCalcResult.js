/** @module selector-selectCalcResult */
import { pipeFunction } from '../../utils/pipeFunction'
import { correctBeginOfSingleNegativeNmbr } from './correctBeginOfSingleNegativeNmbr'
import { turnDisplayDataToArray } from './turnDisplayDataToArray'
import { multiplication } from './multiplication'
import { division } from './division'
import { subtraction } from './subtraction'
import { addition } from './addition'
import { finalResult } from './finalResult'

/**
 * Selector for getting calc result, main logic
 * @function selectCalcResult
 * @param {Object} state - Redux state
 * @param {string} state.displayData - data from calc screen, f.e. '2 + 456 * 9', spaces are required
 * @returns {string} result of calculation
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/selectCalcResult.test.js}
 */
export const selectCalcResult = ({ displayData }) => {
    // error handler for getting quick answer
    if (/error|nan/i.test(displayData)) {
        return 'Error'
    }

    // infinity handler for getting quick answer
    if (/^-*\s*infinity$/i.test(displayData)) {
        return displayData
    }

    displayData = pipeFunction([
        correctBeginOfSingleNegativeNmbr,
        turnDisplayDataToArray,
        multiplication,
        division,
        subtraction,
        addition,
    ])(displayData)

    return finalResult(displayData)
}
