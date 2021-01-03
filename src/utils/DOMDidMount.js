/** @module utils-DOMDidMount */

// import { calcFeaturesLogic } from './calcFeaturesLogic'
import { keyboardEventListener } from '../features/calcLogic/keyboardEventListener/keyboardEventListener'
import { calcFeaturesLogic } from './calcFeaturesLogic'

/**
 * Must be call after App render
 *
 * @function DOMDidMount
 * @returns {void}
 * @example @see [test]{@link https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/DOMDidMount.test.js}
 */
/* 
export const DOMDidMount = () =>
    globalThis.addEventListener('DOMContentLoaded', () => {
        keyboardEventListener()
        // calcFeaturesLogic()
    })
     */
export const DOMDidMount = () => {
    keyboardEventListener()
    calcFeaturesLogic()
}
