/** @module selector-selectCalcResult */

/**
 * Function for calc addition
 * @function addition
 * @param {Array<string|number>} data - specific arrays of numbers and strings (operators, operands and anything else)
 * @returns {number} result of addition all numbers in Array
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/addition.test.js}
 */
export function addition(data) {
    // [null, 2, '+', 225] ~> [2, 225]
    data = data.filter((e) => typeof e === 'number')
    // [2, 225] ~> 227
    return data.reduce((accum, currentVal) => accum + currentVal)
}
