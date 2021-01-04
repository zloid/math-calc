/** @module app-App */
import Reef from 'reefjs'
import { GithubCorner } from '../components/GithubCorner/GithubCorner'
import { UiOfCalcApp } from '../components/UiOfCalcApp/UiOfCalcApp'

/**
 * Returns instance of Reef.js (whole SPA)
 * @function
 * @param {string=} placeToRender
 * @example
 * App('#cool-root').render()
 */
const App = (placeToRender = '#root') =>
    new Reef(placeToRender, {
        template: () => /* html */ `<div>
            ${UiOfCalcApp()}
            ${GithubCorner('https://github.com/zloid/math-calc')}            
        </div>`,
    })

export default App
