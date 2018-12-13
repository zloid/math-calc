'use strict';

;(function () {
    
    var firstClick = true;
    
    var calcScreen = document.querySelector('#screen');
    var allGrabButtons = document.querySelectorAll('button');
    
    calcScreen.innerHTML = 0;

    var _loop = function _loop(i) {
        allGrabButtons[i].addEventListener('click', function () {

            if (allGrabButtons[i].innerHTML == 'Clear') {
                calcScreen.innerHTML = '';
            } else if (allGrabButtons[i].innerHTML == ' = ') {
                
                let middleResult = eval(calcScreen.innerHTML);
                
                    if (isNaN(middleResult)) {
                        calcScreen.innerHTML = 'NO WAY!';
                    } else {
                        calcScreen.innerHTML = middleResult;
                    }
                
                
            } else {
                if (calcScreen.innerHTML == 0 && firstClick == true) {
                    calcScreen.innerHTML = '';
                    firstClick = false;
                }
                
                calcScreen.innerHTML += allGrabButtons[i].innerHTML;
            }
        });
    };

    for (var i = 0; i < allGrabButtons.length; i++) {
        _loop(i);
    }

})();