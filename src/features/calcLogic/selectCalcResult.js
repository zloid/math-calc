/** @module selector-selectCalcResult */
import { pipeFunction } from '../../utils/pipeFunction'
import { turnDisplayDataToArray } from './turnDisplayDataToArray'
import { correctBeginOfSingleNegativeNmbr } from './correctBeginOfSingleNegativeNmbr'
import { finalResult } from './finalResult';

/**
 * Selector for getting calc result, main logic
 * @function selectCalcResult
 * @param {Object} state - Redux state
 * @param {string} state.displayData - data from calc screen, f.e. '2 + 456 * 9', spaces are required
 * @returns {string} result of calculation
 */
export const selectCalcResult = ({ displayData }) => {
    /**
     * Function for calc multiplication
     * @function multiplication
     * @param {Array<string|number>} data - specific arrays of numbers and strings (operators and operands)
     * @returns {Array<string|number>} specific arrays of numbers and strings
     * @example
     * // [4, '+', 12]
     * multiplication([4, '+', 3, '*', 4])
     */
    function multiplication(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === '*') {
                data[i + 1] = data[i - 1] * data[i + 1]
                data[i] = data[i - 1] = null
            }
        }
        // [4, '+', null, null, 12] ~> [4, '+', 12]
        return data.filter((e) => e !== null)
    }

    /**
     * Function for calc division
     * @function division
     * @param {Array<string|number>} data - specific arrays of numbers and strings (operators and operands)
     * @returns {Array<string|number>} specific arrays of numbers and strings
     * @example
     * // [7, '+', 1]
     * division([7, '+', 4, '÷', 4])
     */
    function division(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === '÷') {
                data[i + 1] = data[i - 1] / data[i + 1]
                data[i] = data[i - 1] = null
            }
        }
        // [4, '+', null, null, 1] ~> [4, '+', 1]
        return data.filter((e) => e !== null)
    }

    /**
     * Function for calc addition
     * @function addition
     * @param {Array<string|number>} data - specific arrays of numbers and strings (operators, operands and anything else)
     * @returns {number} result of addition all numbers in Array
     * @example
     * // 229
     * addition([null, 2, '+', 225, 1, 1])
     */
    function addition(data) {
        // [null, 2, '+', 225] ~> [2, 225]
        data = data.filter((e) => typeof e === 'number')
        // [2, 225] ~> 227
        return data.reduce((accum, currentVal) => accum + currentVal)
    }

    /**
     * Function for calc subtraction
     * @function subtraction
     * @param {Array<string|number>} data - specific arrays of numbers and strings (operators and operands)
     * @returns {Array<string|number>} specific arrays of numbers and strings
     * @example
     * // [4, '+', 33]
     * subtraction([4, '+', 36, '-', 3])
     */
    function subtraction(data) {
        // [null, null, 36, '-', 3] ~> [36, '-', 3]
        // [36, '-', 3] ~> [33]
        for (let i = 0; i < data.length; i++) {
            if (data[i] === '-') {
                data[i + 1] = data[i - 1] - data[i + 1]
                data[i] = data[i - 1] = null
            }
        }
        return data.filter((e) => e !== null)
    }


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
