import { subtraction } from '../../../src/features/calcLogic/subtraction'

describe('subtraction', () => {
    it('should work', () => {
        expect(subtraction([123 - 123])).toEqual([0])
        expect(subtraction([4, '+', 36, '-', 3])).toEqual([4, '+', 33])
        expect(subtraction([4, '-', 2, '-', 3, '*', 999])).toEqual([
            -1,
            '*',
            999,
        ])
    })
})
