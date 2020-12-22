/**@module utils-pipeFunction */

/**
 * For pipeline a data thru all function from first to last
 * @function pipeFunction
 * @param {Function[]} funcs
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/pipeFunction.test.js}
 */
export const pipeFunction = (funcs) => (...args) =>
    funcs.reduce((prev, fnc) => [fnc(...prev)], args)[0]
