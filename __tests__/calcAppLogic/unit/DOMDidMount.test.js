import { screen, fireEvent } from '@testing-library/dom'
import App from '../../../src/app/App'
import store from '../../../src/app/store'
import mapAllDispatch from '../../../src/utils/mapAllDispatch'
import { DOMDidMount } from '../../../src/utils/DOMDidMount'

document.body.innerHTML = /* html */ '<div role="mainId" id="root"></div>'

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

describe('DOMDidMount', () => {
    beforeEach(() => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear screen by click main keyboard key Delete
        fireEvent.keyDown(document, { key: 'Delete', code: 'Delete' })
        // calc screen is clear
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
    it('App without call DOMDidMount() can not deal with keyboard', () => {
        // main keyboard
        fireEvent.keyDown(document, { key: '9', code: 'Digit9' })
        // calc screen value
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
    it('App after call DOMDidMount() can deal with keyboard', () => {
        !globalThis.mapAllDispatch &&
            (globalThis.mapAllDispatch = mapAllDispatch)
        DOMDidMount()
        // main keyboard
        fireEvent.keyDown(document, { key: '9', code: 'Digit9' })
        // calc screen value
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('9')
    })
})
