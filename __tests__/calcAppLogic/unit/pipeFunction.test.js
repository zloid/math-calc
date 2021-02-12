import { pipeFunction } from '../../../src/utils/pipeFunction'

describe('pipeFunction', () => {
    it('should pipeline a data thru all function', () => {
        const add = (a, b) => a + b
        const square = (n) => n * n

        expect(pipeFunction([add, square])(1, 2)).toBe(9)
        expect(pipeFunction([add, square])(2, 2)).toBe(16)
        expect(pipeFunction([square, square, square])(2)).toBe(256)
    })
})
