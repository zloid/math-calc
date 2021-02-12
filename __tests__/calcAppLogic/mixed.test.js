import { screen, fireEvent } from '@testing-library/dom'
import App from '../../src/app/App'
import store from '../../src/app/store'
import mapAllDispatch from '../../src/utils/mapAllDispatch'

document.body.innerHTML = /* html */ '<div role="mainId" id="root"></div>'

!globalThis.mapAllDispatch && (globalThis.mapAllDispatch = mapAllDispatch)

App('#root').render()
// render each time when dispatch redux actions
store.subscribe(() => {
    App('#root').render()
})

describe('div#root', () => {
    it('should exist', () => {
        expect(screen.queryByRole(/mainId/i)).not.toBeNull()
    })
})

describe('App initial screen value', () => {
    it('should be 0', () => {
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
})

describe('App clear button', () => {
    it('click C(clear) button for clear calc screen', () => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
        // click some button
        fireEvent.click(screen.getByRole(/calcBtn9/i))
        // calc screen not clear
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('9')
        // clear screen
        fireEvent.click(screen.getByRole(/calcBtnClear/i))
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
})

describe('App calc', () => {
    beforeEach(() => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
    it('click "=" for getting result of: "99 ÷ 11', () => {
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        // click "="
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('9')
    })
    it('click on -calc screen- for getting result of: "99 ÷ 3 ÷ 33"', () => {
        // division
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        // click on screen
        fireEvent.click(screen.getByRole(/^calcMainScreen$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('1')
    })
    it('regExp for calcScreen is works: "9......3...1 + 0002 = 11.31"', () => {
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        // click "="
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '11.31'
        )
    })
    it('300 / 15000 * 100 = 2', () => {
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn5$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        // click on screen
        fireEvent.click(screen.getByRole(/^calcMainScreen$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('2')
    })
    it('10 / 2 * 3 / 5 * 6 / 2 = 9', () => {
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtn5$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtn6$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('9')
    })
})
