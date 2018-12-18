/*
*   math-calc v0.1.11
*   https://github.com/zloid
*/

;(() => {

    let screenObj = document.querySelector('#calcScreen'),
        buttonsArr = document.querySelectorAll('#calcButtonsNum > button, #calcButtonsOperators > button'),
        evalButtonObj = document.querySelector('#eval'),
        backspaceButtonObj = document.querySelector('#backspace'),
        forwardspaceButtonObj = document.querySelector('#forwardspace'),
        clearAllButtonObj = document.querySelector('#clearAll'),
        backStepButtonObj = document.querySelector('#backStep'),
        backStepMemoStr = screenObj.innerHTML,
        // saveMemo,
        addCharFromRightBool = true;

    //FUNCTIONS
    function clearAll () {        
        screenObj.style.color = '#fff';        
        addCharFromRightBool = true;
        // saveMemo = screenObj.innerHTML;
        savePrevScreenResult();  
        screenObj.innerHTML = '0';
        // backStepMemoStr = saveMemo;
    }

    function clearErrorFromScreen () {
        if (screenObj.innerHTML == 'ERROR' || screenObj.innerHTML == 'Infinity') {
            clearAll();
            screenObj.style.color = '#fff';
        }
    }

    function addCharFromLeft (key) {
        backStepMemoStr = screenObj.innerHTML
        buttonsArr[key].innerHTML.match(/\d/)
            ? screenObj.innerHTML = buttonsArr[key].innerHTML + screenObj.innerHTML
            : screenObj.innerHTML += buttonsArr[key].innerHTML;
    }

    function addButtonsValueOnScreen (key) {        
        buttonsArr[key].innerHTML.match(/\D/) && (addCharFromRightBool = true);
        clearErrorFromScreen();
        addCharFromRightBool
            ? screenObj.innerHTML += buttonsArr[key].innerHTML
            : addCharFromLeft(key);
        doRegExpForBadSituations();
    }

    function doRegExpForBadSituations () {
        let middleStr;
        middleStr = screenObj.innerHTML;
        //begin > 00 > 0
        middleStr = middleStr.replace(/^0+/, '0');
        //begin > 02 > 0
        middleStr = middleStr.replace(/^0(\d|[(])/, '$1');
        //begin > 012 > 12; + 02 > + 2
        middleStr = middleStr.replace(/([+-]|÷|\*)\s*0(\d)/, '$1 $2');
        //++ -- ÷÷ *** +-÷  > + - * ÷
        middleStr = middleStr.replace(/(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g, ' $1 ');
        //.... > . > (( > ( > )) > )
        middleStr = middleStr.replace(/(\.|\(|\))+/g, '$1');
        //begin > ) > (
        middleStr = middleStr.replace(/^0\)/, '(');
        //() > ' '
        // middleStr = middleStr.replace(/\(\)/, ' ');
        //431.55.66 + 1.2.3 > 431.5566 + 1.23
        middleStr = middleStr.replace(/(\d+\.\d+)\./g, '$1');
        //.7 > 0.7
        middleStr = middleStr.replace(/[^\d]\./, ' 0.');
        middleStr = middleStr.replace(/^\./, '0.');
        //7. + > 7 + 
        middleStr = middleStr.replace(/([\d])\.\s/g, ' $1 ');
        // '' * 5 > 5 * 5  ; ÷ 5 > 5 ÷ 5
        middleStr = middleStr.replace(/^\s*(\*|÷)\s*(\d+)/, '$2 $1 $2 ');
        screenObj.innerHTML = middleStr;
    }

    function toEvaluate () {
        savePrevScreenResult();                
        // * 5 > 5 * 5 ; ÷ 5 > 5 ÷ 5
        screenObj.innerHTML = screenObj.innerHTML.replace(/^\s*(\*|÷)\s*(\d+)/, '$2 $1 $2 ');
        //5 * > 5 * 5 ; 5 ÷ > 5 ÷ 5
        screenObj.innerHTML = screenObj.innerHTML.replace(/(\d+)\s*(\*|÷)\s*$/, '$1 $2 $1');
        // > 0 ; F
        // screenObj.innerHTML = screenObj.innerHTML.replace(/(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g, ' 0 ');  
        let middleValue = screenObj.innerHTML.replace(/÷/g, '/');
        let endValue = eval(middleValue);
        isNaN(endValue)
            ? (screenObj.innerHTML = 'ERROR', screenObj.style.color = '#be0000')
            : screenObj.innerHTML = eval(middleValue);
    }

    function doBackspace () {        
        clearErrorFromScreen();
        screenObj.innerHTML = screenObj.innerHTML.trim();
        screenObj.innerHTML = screenObj.innerHTML.slice(0, -1);
        screenObj.innerHTML = screenObj.innerHTML.trim();
        screenObj.innerHTML == '' && (screenObj.innerHTML = '0');
        addCharFromRightBool = true;
    }

    function doForwardspace () {        
        clearErrorFromScreen();
        screenObj.innerHTML = screenObj.innerHTML.trim();
        screenObj.innerHTML = screenObj.innerHTML.slice(1);
        screenObj.innerHTML = screenObj.innerHTML.trim();
        addCharFromRightBool = false;
        screenObj.innerHTML == '' && (screenObj.innerHTML = '0', addCharFromRightBool = true);
    }

    function savePrevScreenResult () {
        // clearErrorFromScreen();
        backStepMemoStr = screenObj.innerHTML;        
    }

    //EVENTS
    //clear
    clearAllButtonObj.onclick = clearAll;
    screenObj.ondblclick = clearAll;
    //clicking simple buttons
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].addEventListener('click', () => {
            savePrevScreenResult();
            addButtonsValueOnScreen(i)
        })
    }
    //to evaluate
    evalButtonObj.onclick = toEvaluate;
    screenObj.onclick = toEvaluate;
    //backspace
    backspaceButtonObj.addEventListener('click', () => {
        addCharFromRightBool = true;
        doBackspace();
    })
    //forwardspace
    forwardspaceButtonObj.addEventListener('click', () => {
        addCharFromRightBool = false;
        doForwardspace();
    })
    //backStepButtonObj click
    backStepButtonObj.addEventListener('click', () => {
        screenObj.style.color = '#fff';
        screenObj.innerHTML = backStepMemoStr;
    })
    //backStepButtonObj hover
    backStepButtonObj.addEventListener('mouseover', () => {
        backStepButtonObj.innerHTML = backStepMemoStr;
    })
    //backStepButtonObj on hover
    backStepButtonObj.addEventListener('mouseout', () => {
        backStepButtonObj.innerHTML = 'Return';
    })

})();