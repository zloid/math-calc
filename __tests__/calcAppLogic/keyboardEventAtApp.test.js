import { screen, fireEvent } from '@testing-library/dom'
import mapAllDispatch from '../../src/utils/mapAllDispatch'
import App from '../../src/app/App'
import { DOMDidMount } from '../../src/utils/DOMDidMount'
import store from '../../src/app/store'

!globalThis.mapAllDispatch && (globalThis.mapAllDispatch = mapAllDispatch)

document.body.innerHTML = /* html */ '<div role="mainId" id="root"></div>'

App('#root').render()
DOMDidMount()
// render each time when dispatch redux actions
store.subscribe(() => {
    App('#root').render()
})

describe('div#root', () => {
    it('should exist', () => {
        expect(screen.queryByRole(/mainId/i)).not.toBeNull()
    })
})

describe('Keyboard and Numpad is working for calc App', () => {
    beforeEach(() => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear screen by click main keyboard key Delete
        fireEvent.keyDown(document, { key: 'Delete', code: 'Delete' })
        // calc screen is clear
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('0')
    })
    it('- 9 - 9 + 1 * 17 / 17 = - 17', () => {
        // main keyboard
        fireEvent.keyDown(document, { key: '-', code: 'Minus' })
        fireEvent.keyDown(document, { key: '9' })
        // '-' on numPad
        fireEvent.keyDown(document, { key: '-', code: 'NumpadSubtract' })
        fireEvent.keyDown(document, { key: '9' })
        // '+'
        fireEvent.keyDown(document, { key: '+' })
        fireEvent.keyDown(document, { key: '1' })
        // '*'
        fireEvent.keyDown(document, { key: '*' })
        fireEvent.keyDown(document, { key: '1' })
        fireEvent.keyDown(document, { key: '7' })
        // '/'
        fireEvent.keyDown(document, { key: '/' })
        fireEvent.keyDown(document, { key: '1' })
        fireEvent.keyDown(document, { key: '7' })
        // equal, numPad key Enter
        fireEvent.keyDown(document, { key: 'Enter', code: 'NumpadEnter' })
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe('- 17')
    })
    it('1234567890 + 1234567890 = 2469135780', () => {
        // main keyboard pressing: 123456789
        for (let i = 1; i < 10; i++) {
            fireEvent.keyDown(document, {
                key: `${i}`,
                code: `Digit${i}`,
            })
        }
        // main keyboard pressing: 0
        fireEvent.keyDown(document, { key: '0', code: 'Digit0' })

        // Numpad key '+'
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })

        // Numpad keyboard pressing: 123456789
        for (let i = 1; i < 10; i++) {
            fireEvent.keyDown(document, {
                key: `${i}`,
                code: `Digit${i}`,
            })
        }
        // main keyboard pressing: 0
        fireEvent.keyDown(document, { key: '0', code: 'Numpad0' })

        // equal, keyboard key Enter
        fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' })
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '2469135780'
        )
    })
    it('1234567890.1 + 1234567890,1 = 2469135780.2', () => {
        // main keyboard pressing:
        for (let i = 1; i < 10; i++) {
            fireEvent.keyDown(document, {
                key: `${i}`,
                code: `Digit${i}`,
            })
        }
        fireEvent.keyDown(document, { key: '0', code: 'Digit0' })
        // point is work
        fireEvent.keyDown(document, { key: '.', code: 'Period' })
        fireEvent.keyDown(document, { key: '1', code: 'Digit1' })

        // Numpad key '+'
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })

        // Numpad keyboard pressing:
        for (let i = 1; i < 10; i++) {
            fireEvent.keyDown(document, {
                key: `${i}`,
                code: `Digit${i}`,
            })
        }
        fireEvent.keyDown(document, { key: '0', code: 'Numpad0' })
        // comma is work
        fireEvent.keyDown(document, { key: ',', code: 'NumpadDecimal' })
        fireEvent.keyDown(document, { key: '1', code: 'Numpad1' })

        // equal, numPad key Enter
        fireEvent.keyDown(document, { key: 'Enter', code: 'NumpadEnter' })
        // calc screen result
        expect(screen.getByRole(/calcMainScreen/i).textContent.trim()).toBe(
            '2469135780.2'
        )
    })
})
