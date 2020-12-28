/** @module selector-selectCalcResult-subtraction */

/**
 * Function for calc subtraction
 * @function subtraction
 * @param {Array<string|number>} data - specific arrays of numbers and strings (operators and operands)
 * @returns {Array<string|number>} specific arrays of numbers and strings
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/subtraction.test.js}
 */
export function subtraction(data) {
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
