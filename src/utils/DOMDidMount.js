/** @module utils-DOMDidMount */

// import { calcFeaturesLogic } from './calcFeaturesLogic'
import { keyboardEventListener } from '../features/calcLogic/keyboardEventListener/keyboardEventListener'

/**
 * Must be call after App render
 * 
 * @function DOMDidMount
 * @returns {void} 
 * @example @see [test]{@link }
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
    // calcFeaturesLogic()
}
