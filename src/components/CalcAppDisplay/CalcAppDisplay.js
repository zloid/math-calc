import store from '../../app/store'

export const CalcAppDisplay = () => /* html */ `<div class="row">
    <div
        class="col calcScreen"
        onclick="globalThis.mapAllDispatch.buttonToDisplay.doEqual()"
        role="calcMainScreen"
    >
        ${store.getState().calcLogic.displayData}
    </div>
</div>`
