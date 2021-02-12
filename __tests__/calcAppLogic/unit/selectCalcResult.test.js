import { selectCalcResult } from '../../../src/features/calcLogic/selectCalcResult'

describe('selectCalcResult', () => {
    it('should pass', () => {
        expect(selectCalcResult({ displayData: '.1 * .2' })).toBe('0.02')
        expect(selectCalcResult({ displayData: '0 ÷ 0' })).toBe('Error')
        expect(selectCalcResult({ displayData: '0 - 90 - 7' })).toBe('- 97')
        expect(selectCalcResult({ displayData: '2 + 225 + 2' })).toBe('229')
    })
})
