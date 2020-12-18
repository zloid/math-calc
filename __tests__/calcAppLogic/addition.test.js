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

describe('calc App addition logic', () => {
    beforeEach(() => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
    it('2 + 2.2 = 4.2', () => {
        // addition
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '4.2'
        )
    })
    it('9 + 4 + 1 = 14', () => {
        // addition
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn4$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '14'
        )
    })
    it('1 + 0003 + 1.4 + 7 = 12.4', () => {
        // addition
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn4$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn7$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '12.4'
        )
    })
    it('0.1 + 0.2 = 0.3', () => {
        // addition
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '0.3'
        )
    })
    it('0.1 + 0.002 = 0.102', () => {
        // addition
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))

        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))

        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '0.102'
        )
    })
    it('2 + 2.11 = 4.11', () => {
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '4.11'
        )
    })
    it('0+1+2+3+4+5+6+7+8+9+ = 45', () => {
        for (let i = 0; i < 10; i++) {
            fireEvent.click(screen.getByRole(`calcBtn${i}`))
            fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        }
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('45')
    })
})
