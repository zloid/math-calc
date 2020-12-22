/**@module calcLogic-finalResult */

/**
 * For correct final result calculation
 * @function finalResult
 * @param {number} data - final answer
 * @returns {string} correct final answer
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/finalResult.test.js}
 */
export function finalResult(data) {
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
