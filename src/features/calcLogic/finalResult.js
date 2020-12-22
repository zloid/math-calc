/**@module calcLogic-finalResult */

/**
 * For correct final result calculation
 * @function finalResult
 * @param {number} data - final answer
 * @returns {string} correct final answer
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
