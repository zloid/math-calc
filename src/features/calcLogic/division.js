/** @module selector-selectCalcResult-division */

/**
 * Function for calc division
 * @function division
 * @param {Array<string|number>} data - specific arrays of numbers and strings (operators and operands)
 * @returns {Array<string|number>} specific arrays of numbers and strings
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/division.test.js}
 */
export function division(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === '÷') {
            data[i + 1] = data[i - 1] / data[i + 1]
            data[i] = data[i - 1] = null
        }
    }
    // [4, '+', null, null, 1] ~> [4, '+', 1]
    return data.filter((e) => e !== null)
}
