/**@module utils-pipeFunction */

/**
 * For pipeline a data thru all function from first to last
 * @function pipeFunction
 * @param {Function[]} funcs 
 */
export const pipeFunction = (funcs) => (...args) =>
    funcs.reduce((prev, fnc) => [fnc(...prev)], args)[0]