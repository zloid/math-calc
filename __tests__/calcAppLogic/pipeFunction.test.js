/**
 * 
 * @param {Function[]} funcs 
 */
const pipeFunction = (funcs) => (...args) =>
    funcs.reduce((prev, fnc) => [fnc(...prev)], args)[0]

describe('pipeFunction', () => {
    it('should pipeline data thru all function', () => {
        const add = (a, b) => a + b

        const square = (n) => n * n

        expect(pipeFunction([add, square])(1, 2)).toBe(9)
        expect(pipeFunction([add, square])(2, 2)).toBe(16)
        expect(pipeFunction([square, square, square])(2)).toBe(256)
    })
})

/* 
const flow = funcs => (...args) =>
  funcs.reduce((prev, fnc) => [fnc(...prev)], args)[0]

const add = (a, b) => a + b

const square = n => n * n

const addSquare = flow([add, square])
addSquare(1, 2)
// => 9
*/
