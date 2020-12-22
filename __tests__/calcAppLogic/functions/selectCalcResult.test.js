import { selectCalcResult } from '../../../src/features/calcLogic/selectCalcResult';

describe('selectCalcResult', () => {
    it('should pass', () => {
        expect(selectCalcResult({displayData: '2 + 225 + 2'})).toBe('229')
    })
})