import { multiplication } from '../../../src/features/calcLogic/multiplication'

describe('multiplication', () => {
    it('should work', () => {
        expect(multiplication([3, '*', 4])).toEqual([12])
        expect(multiplication([4, '*', 4])).toEqual([16])
        expect(multiplication([4, '*', 4, '*', 4, '*', 4])).toEqual([256])
        expect(multiplication([4, '*', 4, '-', 2])).toEqual([16, '-', 2])
        expect(multiplication([4, '+', 3, '*', 4, '+', 999])).toEqual([
            4,
            '+',
            12,
            '+',
            999,
        ])
    })
})
