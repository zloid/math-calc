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
    it('calc [screen] value should be 0', () => {
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
})

describe('App clear button', () => {
    beforeEach(() => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
    })
    it('click C(clear) button for clear calc screen', () => {
        fireEvent.click(screen.getByRole(/calcBtn9/i))
        // calc screen not clear
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('9')
        // clear screen
        fireEvent.click(screen.getByRole(/calcBtnClear/i))
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
})
