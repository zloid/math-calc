/** @module selector-selectCalcResult */
/**
 * Function for calc multiplication
 * @function multiplication
 * @param {Array<string|number>} data - specific arrays of numbers and strings (operators and operands)
 * @returns {Array<string|number>} specific arrays of numbers and strings
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/multiplication.test.js}
 */
export function multiplication(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === '*') {
            data[i + 1] = data[i - 1] * data[i + 1]
            data[i] = data[i - 1] = null
        }
    }
    // [4, '+', null, null, 12] ~> [4, '+', 12]
    return data.filter((e) => e !== null)
}
