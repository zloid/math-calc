/** @module utils-mapAllDispatch */

import store from '../app/store'
// RTK actions
import {
    addButtonValueToScreen,
    doEqual,
    clearAllFromCalcScreen,
} from '../features/calcLogic/calcLogicSlice'

/**
 * Creating Singleton which compose all RTK actions we will use
 * @class Connect
 * @returns {Object} collection of all dispathes needs for App
 */
//
class Connect {
    constructor() {
        this.buttonToDisplay = {
            getBtnValue: (payload) =>
                store.dispatch(addButtonValueToScreen(payload)),
            doEqual: () => store.dispatch(doEqual()),
            clearAll: () => store.dispatch(clearAllFromCalcScreen()),
        }
    }
}

/**
 * Singleton with all dispatch-actions
 */
const mapAllDispatch = new Connect()
Object.freeze(mapAllDispatch)

export default mapAllDispatch
