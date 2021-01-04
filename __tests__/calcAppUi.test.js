import { screen } from '@testing-library/dom'
import App from '../src/app/App'
// import { DOMDidMount } from '../src/utils/DOMDidMount'

document.body.innerHTML = /* html */ '<div role="mainId" id="root"></div>'

App('#root').render()
// DOMDidMount()

describe('div#root', () => {
    it('should exist', () => {
        expect(screen.queryByRole(/mainId/i)).not.toBeNull()
    })
})

describe('App', () => {
    it('calc -screen- should exist', () => {
        expect(screen.queryByRole(/calcMainScreen/i)).not.toBeNull()
    })
    it('calc buttons [0-9] should exist', () => {
        for (let i = 0; i < 10; i++) {
            expect(screen.getByRole(`calcBtn${i}`).textContent.trim()).toBe(
                `${i}`
            )
        }
    })
    it('calc button [+] should exist', () => {
        expect(screen.getByRole(/calcBtnPlus/i).textContent.trim()).toBe('+')
    })
    it('calc button [-] should exist', () => {
        expect(screen.getByRole(/calcBtnMinus/i).textContent.trim()).toBe('-')
    })
    it('calc button [*] should exist', () => {
        expect(screen.getByRole(/calcBtnMultiply/i).textContent.trim()).toBe(
            '*'
        )
    })
    it('calc button [÷] should exist', () => {
        expect(screen.getByRole(/calcBtnDivision/i).textContent.trim()).toBe(
            '÷'
        )
    })
    it('calc button [Clear] should exist', () => {
        expect(screen.getByRole(/calcBtnClear/i).textContent.trim()).toBe('C')
    })
    it('calc button [=] should exist', () => {
        expect(screen.getByRole(/calcBtnEqual/i).textContent.trim()).toBe('=')
    })
    it('calc button [.] should exist', () => {
        expect(screen.getByRole(/calcBtnPoint/i).textContent.trim()).toBe('.')
    })
})

describe('GitHub corner at App calc', () => {
    it('should exist', () => {
        // expect(screen.getByRole(/githubCorner/i)).not.toBeNull()
    })
})

describe('App Features Area', () => {
    it('should exist', () => {
        expect(screen.getByRole(/featuresAreaForHover/i)).not.toBeNull()
        expect(screen.getByRole(/calcFeaturesForUsers/i)).not.toBeNull()
    })
    /* 
    // todo
    it('main element is hover by default', () => {
         expect(screen.getByRole(/calcFeaturesForUsers/i)).toBeNull()

         fireEvent.mouseEnter(screen.getByRole(/featuresAreaForHover/i))

         expect(screen.getByRole(/calcFeaturesForUsers/i)).not.toBeNull()
    })
    */
})
