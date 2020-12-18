/** @module selector-selectCalcResult */

/**
 * Selector for getting calc result, main logic
 * @function selectCalcResult
 * @param {Object} state - Redux state
 * @param {string} state.displayData - data from calc screen, f.e. '2 + 456 * 9', spaces are required
 * @returns {string} result of calculation
 * @example
 * // returns: '229'
 * selectCalcResult({displayData: '2 + 225 + 2'})
 * @example
 * // returns: 'Error'
 * selectCalcResult({displayData: '0 ÷ 0'})
 */
export const selectCalcResult = ({ displayData }) => {
    /**
     * Function for convert input sting to specific arrays of numbers and strings (operators and operands)
     * @function turnDisplayDataToArray
     * @param {string} data - from state
     * @returns {Array<string|number>} specific arrays of numbers and strings (operators and operands)
     * @example
     * // [2, '+', 225]
     * turnDisplayDataToArray('2 + 225')
     */
    function turnDisplayDataToArray(data) {
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
     * For correct final result calculation
     * @function finalResult
     * @param {number} data - final answer
     * @returns {string} correct final answer
     * @example
     * // 'Error'
     * finalResult(NaN)
     * @example
     * // '- 876'
     * finalResult(-876)
     * @example
     * // '0.3'
     * finalResult(0.30000000000000004)
     */
    function finalResult(data) {
        // avoiding 0.1 + 0.2
        data = parseFloat(data.toFixed(11))
        data = String(data)
        switch (true) {
            case /nan/i.test(data):
                return 'Error'
            case /^-./.test(data):
                // '-876' ~> '- 876'
                return data.replace(/^-(.)/, '- $1')
            default:
                return data
        }
    }

    // error handler for getting quick answer
    //todo
    /* 
    if (/error|nan/i.test(displayData)) {
        return 'Error'
    }
     */

    // infinity handler for getting quick answer
    // todo
    /* 
    if (/^-*\s*infinity$/i.test(displayData)) {
        return displayData
    }
   */
    // displayData = correctBeginOfSingleNegativeNmbr(displayData)
    displayData = turnDisplayDataToArray(displayData)
    displayData = multiplication(displayData)
    // displayData = division(displayData)
    // displayData = subtraction(displayData)
    displayData = addition(displayData)

    return finalResult(displayData)
}
