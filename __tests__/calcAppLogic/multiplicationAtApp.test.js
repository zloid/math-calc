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

describe('calc App multiplication logic', () => {
    beforeEach(() => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
    it('9 * 4 = 36', () => {
        // multiplication
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtn4$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '36'
        )
    })
    it('9 * 9 * 100 = 8100', () => {
        // multiplication
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '8100'
        )
    })
    it('0.1 * 0.2 = 0.02', () => {
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtn2$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '0.02'
        )
    })
})
