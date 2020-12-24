/**@module calcLogic-correctBeginOfSingleNegativeNmbr */

/**
 * Function for handle of early data
 * @function correctBeginOfSingleNegativeNmbr
 * @param {string} data - from state
 * @returns {string}
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/correctBeginOfSingleNegativeNmbr.test.js}
 */
export function correctBeginOfSingleNegativeNmbr(data) {
    return data.replace(/^-\s*(\d*)/, '0 - $1')
}
