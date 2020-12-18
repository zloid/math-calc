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

describe('calc App subtraction logic', () => {
    beforeEach(() => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
    it('99 - 3 = 96', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '96'
        )
    })
    it('99 - 3 - 10 = 86', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '86'
        )
    })
    it('0 - 7 = - 7', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn7$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '- 7'
        )
    })
    it('1 - 100 = - 99', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '- 99'
        )
    })
    it('- 9 = = = - 9', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '- 9'
        )
    })
})
