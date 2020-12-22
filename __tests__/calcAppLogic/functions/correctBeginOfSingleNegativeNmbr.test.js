import { correctBeginOfSingleNegativeNmbr } from '../../../src/features/calcLogic/correctBeginOfSingleNegativeNmbr';

describe('correctBeginOfSingleNegativeNmbr', () => {
    it('should pass', () => {
        expect(correctBeginOfSingleNegativeNmbr('- 8')).toBe('0 - 8')
        expect(correctBeginOfSingleNegativeNmbr('-')).toBe('0 - ')
    })
})