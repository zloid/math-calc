import { finalResult } from '../../../src/features/calcLogic/finalResult'

describe('finalResult', () => {
    it('should pass', () => {
        expect(finalResult(NaN)).toBe('Error')
        expect(finalResult(-876)).toBe('- 876')
        expect(finalResult(0.30000000000000004)).toBe('0.3')
    })
})
