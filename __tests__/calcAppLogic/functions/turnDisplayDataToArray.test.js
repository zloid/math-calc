import { turnDisplayDataToArray } from '../../../src/features/calcLogic/turnDisplayDataToArray'

describe('turnDisplayDataToArray', () => {
    it('should pass', () => {
        expect(turnDisplayDataToArray('2 + 225')).toEqual([2, '+', 225])
        expect(turnDisplayDataToArray('2.2 * 2 ÷ 3 + 1 - 4')).toEqual([
            2.2,
            '*',
            2,
            '÷',
            3,
            '+',
            1,
            '-',
            4,
        ])
    })
})
