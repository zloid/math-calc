export const CalcAppButtons = () => /*html*/ `<div>    
    <div class="row">
        <div class="col">
            <button
                role="calcBtn7"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                7
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtn8"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                8
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtn9"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                9
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnDivision"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                ÷
            </button>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <button
                role="calcBtn4"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                4
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtn5"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                5
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtn6"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                6
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnMultiply"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                *
            </button>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <button
                role="calcBtn1"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                1
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtn2"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                2
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtn3"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                3
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnMinus"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                -
            </button>
        </div>
    </div>

    <div class="row">
        <div class="col"></div>
        <div class="col">
            <button
                role="calcBtn0"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                0
            </button>
        </div>
        <div class="col"></div>
        <div class="col"></div>
    </div>

    <div class="row">
        <div class="col">
            <button
                role="calcBtnClear"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.clearAll()"
            >
                C
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnEqual"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.doEqual()"
            >
                =
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnPoint"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                .
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnPlus"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.mapAllDispatch.buttonToDisplay.getBtnValue(this.textContent)"
            >
                +
            </button>
        </div>
    </div>
</div>`
