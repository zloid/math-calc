import { CalcAppDisplay } from '../CalcAppDisplay/CalcAppDisplay'
import { CalcAppButtons } from '../CalcAppButtons/CalcAppButtons'
import { CalcAppInfoBoard } from '../CalcAppInfoBoard/CalcAppInfoBoard'

export const UiOfCalcApp = () => /* html */ `<div class="container disable-dbl-tap-zoom">
    ${CalcAppDisplay()}
<hr />
    ${CalcAppButtons()} 
    ${CalcAppInfoBoard()} 
</div>`
