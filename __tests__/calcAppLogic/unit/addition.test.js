import { addition } from '../../../src/features/calcLogic/addition'

describe('addition', () => {
    it('should work', () => {
        expect(addition([1, 2, 3, 4, 5])).toBe(15)
        expect(addition([null, 2, '*', 225, 1, 1, 'blah', 'any'])).toBe(229)
    })
})
