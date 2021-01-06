<!-- Information about the project to be edited by hand -->

# modern vanilla JS math calc

## Features for Developers

-   This App based on predictable Flux architecture
-   Focused on modern JS
-   Used optional type checking by JSDoc + VSCode + Typescript (tsc)
-   HTML-in-JS (plain HTML in plain JS) instead of JSX
-   Bootstrap (without jquery and popper.js) for simple CSS
-   Bootstrap's CSS is reducing with Auto-Purge, while build creating
-   Separation of App logic and UI
-   Components architecture, rely on predictable RTK style
-   All RTK features: Redux Dev Tools, slices, immer, etc.
-   Jest and @testing-library/dom for tests
-   @babel for: es6 to es5 and correct work with jest & ESM modules
-   Automatic generation of html documentation from JSDoc + docdash as a nice looking template for JSDoc
-   Automatic README.md generation from JSDoc
-   Husky: for hooks
 
## You can

-   git clone [this_repo_url] && cd [repo_name] && npm i (install this repo on your machine)
-   npm run test (for tests)
-   npm run lint (for analysis code in /src by ESLint + type checking by JSDoc + VSCode + tsc)
-   npm run start (for run dev server)
-   npm run build (for creating public build, index.html is autogenerate)
-   npm run docs (for create html docs for app by JSDoc and md-docs by jsdoc-to-markdown)
-   npm run serve (for run app local server and www)
-   use VSC + Extensions: "Comment tagged templates", "lit-html", for best expierence with HTML-in-JS template literals


<!-- You do not need to touch the code below. This is automatic README.md generation -->
<!-- check out https://github.com/jsdoc2md for learn more -->

## API Reference

## Modules
       |             
------ | -----------
[app-App] | 
[components-GithubCorner] | 
[selector-selectCalcResult-addition] | 
[selector-selectCalcResult-correctBeginOfSingleNegativeNmbr] | 
[selector-selectCalcResult-division] | 
[selector-selectCalcResult-finalResult] | 
[utils-keyboardEventListener] | 
[selector-selectCalcResult-multiplication] | 
[selector-selectCalcResult] | 
[selector-selectCorrectRegExpForCalcScreen] | 
[selector-selectCalcResult-subtraction] | 
[selector-selectCalcResult-turnDisplayDataToArray] | 
[utils-calcFeaturesLogic] | 
[utils-DOMDidMount] | 
[utils-mapAllDispatch] | 
[utils-pipeFunction] | 

## Constants

Name | Description
------ | -----------
[initialState] | initialState

## Typedefs

Name | Description
------ | -----------
[CalcStateInterface] | Interface for initialState


## app-App


### app-App~App(\[placeToRender\])

Returns instance of Reef.js (whole SPA)

**Kind**: inner method of [`app-App`]  

| Param | Type | Default |
| --- | --- | --- |
| \[placeToRender\] | `string` | `'#root'` | 

**Example**  
```js
App('#cool-root').render()
```

## components-GithubCorner


### components-GithubCorner~GithubCorner(\[linkToRepo\])

Visual link to gitHub repo

**Kind**: inner method of [`components-GithubCorner`]  
**Returns**: `string` - template literal: octoCat svg + link to repo  

| Param | Type | Description |
| --- | --- | --- |
| \[linkToRepo\] | `string` | link to github repository |

**Example**  
```js
${GithubCorner('https://github.com/')}
```

## selector-selectCalcResult-addition


### selector-selectCalcResult-addition~addition(data)

Function for calc addition

**Kind**: inner method of [`selector-selectCalcResult-addition`]  
**Returns**: `number` - result of addition all numbers in Array  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.<(string|number)>` | specific arrays of numbers and strings (operators, operands and anything else) |

**Example**  
```js
@see [test]
```

## selector-selectCalcResult-correctBeginOfSingleNegativeNmbr


### selector-selectCalcResult-correctBeginOfSingleNegativeNmbr~correctBeginOfSingleNegativeNmbr(data)

Function for handle of early data

**Kind**: inner method of [`selector-selectCalcResult-correctBeginOfSingleNegativeNmbr`]  

| Param | Type | Description |
| --- | --- | --- |
| data | `string` | from state |

**Example**  
```js
@see [test]
```

## selector-selectCalcResult-division


### selector-selectCalcResult-division~division(data)

Function for calc division

**Kind**: inner method of [`selector-selectCalcResult-division`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.<(string|number)>` | specific arrays of numbers and strings (operators and operands) |

**Example**  
```js
@see [test]
```

## selector-selectCalcResult-finalResult


### selector-selectCalcResult-finalResult~finalResult(data)

For correct final result calculation

**Kind**: inner method of [`selector-selectCalcResult-finalResult`]  
**Returns**: `string` - correct final answer  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | final answer |

**Example**  
```js
@see [test]
```

## utils-keyboardEventListener


### utils-keyboardEventListener~keyboardEventListener()

Function which returns keydown events handler, catching keyboard and write to screen

**Kind**: inner method of [`utils-keyboardEventListener`]  
**Returns**: `string` - EventListener for catching Keyboard and NumPad buttons:  1234567890.,+-*÷ enter delete; and ignoring all f-buttons on keyboard  
**Date**: 2020-09-15  
**Example**  
```js
@see [test]
```

## selector-selectCalcResult-multiplication


### selector-selectCalcResult-multiplication~multiplication(data)

Function for calc multiplication

**Kind**: inner method of [`selector-selectCalcResult-multiplication`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.<(string|number)>` | specific arrays of numbers and strings (operators and operands) |

**Example**  
```js
@see [test]
```

## selector-selectCalcResult


### selector-selectCalcResult~selectCalcResult(state)

Selector for getting calc result, main logic

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `string` - result of calculation  

| Param | Type | Description |
| --- | --- | --- |
| state | `Object` | Redux state |
| state.displayData | `string` | data from calc screen, f.e. '2 + 456 * 9', spaces are required |

**Example**  
```js
@see [test]
```

## selector-selectCorrectRegExpForCalcScreen


### selector-selectCorrectRegExpForCalcScreen~selectCorrectRegExpForCalcScreen(state, payload)

For transpile any string to correct data for calculator screen

**Kind**: inner method of [`selector-selectCorrectRegExpForCalcScreen`]  

| Param | Type | Description |
| --- | --- | --- |
| state | `Object` | Redux state |
| payload | `string` | action.payload, string for RegExp |

**Example**  
```js
@see [test]
```

## selector-selectCalcResult-subtraction


### selector-selectCalcResult-subtraction~subtraction(data)

Function for calc subtraction

**Kind**: inner method of [`selector-selectCalcResult-subtraction`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.<(string|number)>` | specific arrays of numbers and strings (operators and operands) |

**Example**  
```js
@see [test]
```

## selector-selectCalcResult-turnDisplayDataToArray


### selector-selectCalcResult-turnDisplayDataToArray~turnDisplayDataToArray(data)

Function for convert input sting to specific arrays of numbers and strings (operators and operands)

**Kind**: inner method of [`selector-selectCalcResult-turnDisplayDataToArray`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings (operators and operands)  

| Param | Type | Description |
| --- | --- | --- |
| data | `string` | from state |

**Example**  
```js
@see [test]
```

## utils-calcFeaturesLogic


### utils-calcFeaturesLogic~calcFeaturesLogic()

For creating user's features pop-up panel. Rely on popper.js lib.

**Kind**: inner method of [`utils-calcFeaturesLogic`]  
**Returns**: `void` - popper.js logic  

## utils-DOMDidMount


### utils-DOMDidMount~DOMDidMount()

Must be call after App render

**Kind**: inner method of [`utils-DOMDidMount`]  
**Example**  
```js
@see [test]
```

## utils-mapAllDispatch


* [utils-mapAllDispatch]
    * [~Connect]
        * [new Connect()]
    * [~mapAllDispatch]


### utils-mapAllDispatch~Connect

**Kind**: inner class of [`utils-mapAllDispatch`]  

#### new Connect()

Creating Singleton which compose all RTK actions we will use

**Returns**: `Object` - collection of all dispathes needs for App  

### utils-mapAllDispatch~mapAllDispatch

Singleton with all dispatch-actions

**Kind**: inner constant of [`utils-mapAllDispatch`]  

## utils-pipeFunction


### utils-pipeFunction~pipeFunction(funcs)

For pipeline a data thru all function from first to last

**Kind**: inner method of [`utils-pipeFunction`]  

| Param | Type |
| --- | --- |
| funcs | `Array.<function()>` | 

**Example**  
```js
@see [test]
```

## initialState

initialState

**Kind**: global constant  

## CalcStateInterface

Interface for initialState

**Kind**: global typedef  
<!-- LINKS -->

[app-App]:#app-app
[components-GithubCorner]:#components-githubcorner
[selector-selectCalcResult-addition]:#selector-selectcalcresult-addition
[selector-selectCalcResult-correctBeginOfSingleNegativeNmbr]:#selector-selectcalcresult-correctbeginofsinglenegativenmbr
[selector-selectCalcResult-division]:#selector-selectcalcresult-division
[selector-selectCalcResult-finalResult]:#selector-selectcalcresult-finalresult
[utils-keyboardEventListener]:#utils-keyboardeventlistener
[selector-selectCalcResult-multiplication]:#selector-selectcalcresult-multiplication
[selector-selectCalcResult]:#selector-selectcalcresult
[selector-selectCorrectRegExpForCalcScreen]:#selector-selectcorrectregexpforcalcscreen
[selector-selectCalcResult-subtraction]:#selector-selectcalcresult-subtraction
[selector-selectCalcResult-turnDisplayDataToArray]:#selector-selectcalcresult-turndisplaydatatoarray
[utils-calcFeaturesLogic]:#utils-calcfeatureslogic
[utils-DOMDidMount]:#utils-domdidmount
[utils-mapAllDispatch]:#utils-mapalldispatch
[utils-pipeFunction]:#utils-pipefunction
[initialState]:#initialstate
[CalcStateInterface]:#calcstateinterface
[`app-App`]:#app-app
[`components-GithubCorner`]:#components-githubcorner
[`selector-selectCalcResult-addition`]:#selector-selectcalcresult-addition
[test]:https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/pipeFunction.test.js
[`selector-selectCalcResult-correctBeginOfSingleNegativeNmbr`]:#selector-selectcalcresult-correctbeginofsinglenegativenmbr
[`selector-selectCalcResult-division`]:#selector-selectcalcresult-division
[`selector-selectCalcResult-finalResult`]:#selector-selectcalcresult-finalresult
[`utils-keyboardEventListener`]:#utils-keyboardeventlistener
[`selector-selectCalcResult-multiplication`]:#selector-selectcalcresult-multiplication
[`selector-selectCalcResult`]:#selector-selectcalcresult
[`selector-selectCorrectRegExpForCalcScreen`]:#selector-selectcorrectregexpforcalcscreen
[`selector-selectCalcResult-subtraction`]:#selector-selectcalcresult-subtraction
[`selector-selectCalcResult-turnDisplayDataToArray`]:#selector-selectcalcresult-turndisplaydatatoarray
[`utils-calcFeaturesLogic`]:#utils-calcfeatureslogic
[`utils-DOMDidMount`]:#utils-domdidmount
[~Connect]:#utils-mapalldispatchconnect
[~mapAllDispatch]:#utils-mapalldispatchmapalldispatch
[`utils-mapAllDispatch`]:#utils-mapalldispatch
[`utils-pipeFunction`]:#utils-pipefunction
[new Connect()]:#new-connect
