/**@module calcLogic-correctBeginOfSingleNegativeNmbr */

/**
 * Function for handle of early data
 * @function correctBeginOfSingleNegativeNmbr
 * @param {string} data - from state
 */
export function correctBeginOfSingleNegativeNmbr(data) {
    return data.replace(/^-\s*(\d*)/, '0 - $1')
}
