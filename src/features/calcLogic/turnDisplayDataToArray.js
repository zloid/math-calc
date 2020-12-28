/** @module selector-selectCalcResult-turnDisplayDataToArray */

/**
 * Function for convert input sting to specific arrays of numbers and strings (operators and operands)
 * @function turnDisplayDataToArray
 * @param {string} data - from state
 * @returns {Array<string|number>} specific arrays of numbers and strings (operators and operands)
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/turnDisplayDataToArray.test.js}
 */
export function turnDisplayDataToArray(data) {
    // sanitizeHTML, f.e. window.mapAllDispatch.buttonToDisplay.getBtnValue(`<a href="javascript:alert(1)">this won't run</a>`)
    data = data.replace(/<|>|\{|\}/g, '')

    const outputData = data.split(' ').map((e) => {
        if (/\d|infinity/i.test(e)) {
            return Number(e)
        }
        return e
    })
    return outputData
}
