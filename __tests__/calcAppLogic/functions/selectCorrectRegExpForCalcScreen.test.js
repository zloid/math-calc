import { selectCorrectRegExpForCalcScreen } from '../../../src/features/calcLogic/selectCorrectRegExpForCalcScreen'

describe('RegExp for calcScreen is work', () => {
    it('"0" ~> "0" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: ' 0 ',
        })
        // expectation
        expect(data).toBe('0')
    })
    it('"Error" ~> "" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: 'Error',
        })
        // expectation
        expect(data).toBe('')
    })
    it('"Error123" ~> "123" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: 'Error123',
        })
        // expectation
        expect(data).toBe('123')
    })
    it('"Errorabc" ~> "0" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: 'ErrorLaunchApplication2',
        })
        // expectation
        expect(data).toBe('0')
    })
    it('"/" ~> "÷" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '1 / 2 / 999',
        })
        // expectation
        expect(data).toBe('1 ÷ 2 ÷ 999')
    })
    it('"," ~> "." ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: ' 4,5 + 2.1 + 3,,,4 ',
        })
        // expectation
        expect(data).toBe('4.5 + 2.1 + 3.4')
    })
    it('"000" ~> "0" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '00000',
        })
        // expectation
        expect(data).toBe('0')
    })
    it('"000008" ~> "8" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '000008',
        })
        // expectation
        expect(data).toBe('8')
    })
    it('"02" ~> "2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '02',
        })
        // expectation
        expect(data).toBe('2')
    })
    it('"+ 02" ~> "+ 2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '+ 02',
        })
        // expectation
        expect(data).toBe(' + 2')
    })
    it('"- 02" ~> "- 2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '- 02',
        })
        // expectation
        expect(data).toBe(' - 2')
    })
    it('"* 02" ~> "* 2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '* 02',
        })
        // expectation
        expect(data).toBe('2 * 2')
    })
    it('"÷/ 02" ~> "÷ 2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '÷ 02',
        })
        // expectation
        expect(data).toBe('2 ÷ 2')
    })
    it('"1+++++2----3÷÷÷÷*÷4***5+-÷6" ~> "1 + 2 - 3 ÷ 4 * 5 ÷ 6" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '1+++++2----3÷÷÷÷*÷4***5+-÷6',
        })
        // expectation
        expect(data).toBe('1 + 2 - 3 ÷ 4 * 5 ÷ 6')
    })
    it('"1..........2" ~> "1.2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '1..........2',
        })
        // expectation
        expect(data).toBe('1.2')
    })
    it('"1..........2 * 3,,,,,,4,,,....5" ~> "1.2 * 3.45"', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '1..........2 * 3,,,,,,4,,,....5',
        })
        // expectation
        expect(data).toBe('1.2 * 3.45')
    })
    it('".7" ~> "0.7" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '.7',
        })
        // expectation
        expect(data).toBe('0.7')
    })
    it('".7 + ." ~> "0.7 + 0." ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '.7 + .',
        })
        // expectation
        expect(data).toBe('0.7 + 0.')
    })
    it('".7 + ." ~> "0.7 + 0." ', () => {
    // run function
    const data = selectCorrectRegExpForCalcScreen({
            displayData: '.7 + .',
        })
        // expectation
        expect(data).toBe('0.7 + 0.')
    })
    it('".7 + .123 - .5 / ,8" ~> "0.7 + 0.123 - 0.5 ÷ 0.8" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '.7 + .123 - .5 / ,8',
        })
        // expectation
        expect(data).toBe('0.7 + 0.123 - 0.5 ÷ 0.8')
    })
    it('if exist some -e-exponential notation, then ~> "8.1e - 9" ~> "8.1e-9 "', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '8.1e - 9',
        })
        // expectation
        expect(data).toBe('8.1e-9')
    })
    it('"7. + 1" ~> "7 + 1" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '7. + 1',
        })
        // expectation
        expect(data).toBe('7 + 1')
    })
    it('"7. + 32. - 5." ~> "7 + 32 - 5." ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '7. + 32. - 5.',
        })
        // expectation
        expect(data).toBe('7 + 32 - 5.')
    })
    it('every character and word becoming to "" except "error" and "e" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '321 LaunchApplication2 + 0.01e-123',
        })
        // expectation
        expect(data).toBe('321 + 0.01e-123')
    })
    it('RegExp for "exponential number" is work: "0.01e-123 + 1 * 3 / 5 - 8 + blah" ~> "0.01e-123 + 1 * 3 / 5 - 8" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: 'foobar0.01e-123 + 1 * 3 / 5 - 8 + blah',
        })
        // expectation
        expect(data).toBe('0.01e-123 + 1 * 3 ÷ 5 - 8 + ')
    })
    it('"Infinity" ~> "Infinity" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: 'Infinity',
        })
        // expectation
        expect(data).toBe('Infinity')
    })
})
