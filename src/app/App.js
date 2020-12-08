/** @module app-App */
import Reef from 'reefjs'

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
        <div role="calcMainScreen"></div>
    </div>`,
    })

export default App
