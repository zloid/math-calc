/** @module utils-calcFeaturesLogic */

import { createPopper } from '@popperjs/core'

/**
 * For creating user's features pop-up panel. Rely on popper.js lib.
 * @function calcFeaturesLogic
 * @returns {void} popper.js logic
 */
export const calcFeaturesLogic = () => {
    const button = document.getElementById('calcFeatures')
    const tooltip = document.getElementById('calc-tooltip')

    let popperInstance = null

    function create() {
        popperInstance = createPopper(button, tooltip, {
            // placement: 'top',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 0],
                    },
                },
            ],
        })
    }

    function destroy() {
        if (popperInstance) {
            popperInstance.destroy()
            popperInstance = null
        }
    }

    function show() {
        tooltip.setAttribute('data-show', '')
        create()
    }

    function hide() {
        tooltip.removeAttribute('data-show')
        destroy()
    }

    const showEvents = ['mouseenter', 'focus']
    const hideEvents = ['mouseleave', 'blur']

    showEvents.forEach((event) => {
        button.addEventListener(event, show)
    })

    hideEvents.forEach((event) => {
        button.addEventListener(event, hide)
    })
}
