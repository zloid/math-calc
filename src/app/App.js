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

            <button role="calcBtn0">0</button>
            <button role="calcBtn1">1</button>
            <button role="calcBtn2">2</button>
            <button role="calcBtn3">3</button>
            <button role="calcBtn4">4</button>
            <button role="calcBtn5">5</button>
            <button role="calcBtn6">6</button>
            <button role="calcBtn7">7</button>
            <button role="calcBtn8">8</button>
            <button role="calcBtn9">9</button>

            <button role="calcBtnPlus">+</button>
            <button role="calcBtnMinus">-</button>
            <button role="calcBtnMultiply">*</button>
            <button role="calcBtnDivision">÷</button>

            <button role="calcBtnClear">C</button>
            <button role="calcBtnEqual">=</button>
            <button role="calcBtnPoint">.</button>
            
        </div>`,
    })


export default App
