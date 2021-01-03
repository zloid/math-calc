/** @module app-App */
import Reef from 'reefjs'
import store from './store'

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
            <div
             onclick="globalThis.mapAllDispatch.buttonToDisplay.doEqual()"
             role="calcMainScreen"
            >
                ${store.getState().calcLogic.displayData}
            </div>

            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn0">0</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn1">1</button>

            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn2">2</button>

            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn3">3</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn4">4</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn5">5</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn6">6</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn7">7</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn8">8</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtn9">9</button>

            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtnPlus">+</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtnMinus">-</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtnMultiply">*</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtnDivision">÷</button>

            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.clearAll()" role="calcBtnClear">C</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.doEqual()" role="calcBtnEqual">=</button>
            <button onclick="globalThis.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)" role="calcBtnPoint">.</button>

            <div
                id="calcFeatures"
                role="featuresAreaForHover"
            >
                calc Features Area
            </div>
            <div 
                id="calc-tooltip" 
                role="calcFeaturesForUsers"
            >
                - Have a keyboard? Math buttons available!
            <br />
                - Click on calc's screen for get result
            </div>
            
        </div>`,
    })

export default App
