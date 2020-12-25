import { division } from '../../../src/features/calcLogic/division'

describe('division', () => {
    it('should work', () => {
        expect(division([4, '÷', 4])).toEqual([1])
        expect(division([7, '*', 4, '÷', 4])).toEqual([7, '*', 1])
        expect(division([999, '*', 77, '÷', 77, '-', 123])).toEqual([
            999,
            '*',
            1,
            '-',
            123,
        ])
    })
})
