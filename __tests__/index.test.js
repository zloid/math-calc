import { screen } from '@testing-library/dom'
import App from '../src/app/App'

document.body.innerHTML = /* html */ '<div role="mainId" id="root"></div>'

App('#root').render()

describe('div#root', () => {
    it('should exist', () => {
        expect(screen.queryByRole(/mainId/i)).not.toBeNull()
    })
})

describe('App', () => {
    it('calc screen should exist', () => {
        expect(screen.queryByRole(/calcMainScreen/i)).not.toBeNull()
    })
})
