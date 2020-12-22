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
Module | Description
------ | -----------
[app-App] | 
[selector-selectCalcResult] | 
[selector-selectCorrectRegExpForCalcScreen] | 
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

## selector-selectCalcResult


* [selector-selectCalcResult]
    * [~selectCalcResult(state)]
    * [~correctBeginOfSingleNegativeNmbr(data)]
    * [~turnDisplayDataToArray(data)]
    * [~multiplication(data)]
    * [~division(data)]
    * [~addition(data)]
    * [~subtraction(data)]
    * [~finalResult(data)]


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
// returns: '229'
selectCalcResult({displayData: '2 + 225 + 2'})
```
**Example**  
```js
// returns: 'Error'
selectCalcResult({displayData: '0 ÷ 0'})
```

### selector-selectCalcResult~correctBeginOfSingleNegativeNmbr(data)

Function for handle of early data

**Kind**: inner method of [`selector-selectCalcResult`]  

| Param | Type | Description |
| --- | --- | --- |
| data | `string` | from state |

**Example**  
```js
// '0 - 8'
correctBeginOfSingleNegativeNmbr('- 8')
```

### selector-selectCalcResult~turnDisplayDataToArray(data)

Function for convert input sting to specific arrays of numbers and strings (operators and operands)

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings (operators and operands)  

| Param | Type | Description |
| --- | --- | --- |
| data | `string` | from state |

**Example**  
```js
// [2, '+', 225]
turnDisplayDataToArray('2 + 225')
```

### selector-selectCalcResult~multiplication(data)

Function for calc multiplication

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.<(string|number)>` | specific arrays of numbers and strings (operators and operands) |

**Example**  
```js
// [4, '+', 12]
multiplication([4, '+', 3, '*', 4])
```

### selector-selectCalcResult~division(data)

Function for calc division

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.<(string|number)>` | specific arrays of numbers and strings (operators and operands) |

**Example**  
```js
// [7, '+', 1]
division([7, '+', 4, '÷', 4])
```

### selector-selectCalcResult~addition(data)

Function for calc addition

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `number` - result of addition all numbers in Array  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.<(string|number)>` | specific arrays of numbers and strings (operators, operands and anything else) |

**Example**  
```js
// 229
addition([null, 2, '+', 225, 1, 1])
```

### selector-selectCalcResult~subtraction(data)

Function for calc subtraction

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.<(string|number)>` | specific arrays of numbers and strings (operators and operands) |

**Example**  
```js
// [4, '+', 33]
subtraction([4, '+', 36, '-', 3])
```

### selector-selectCalcResult~finalResult(data)

For correct final result calculation

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `string` - correct final answer  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | final answer |

**Example**  
```js
// 'Error'
finalResult(NaN)
```
**Example**  
```js
// '- 876'
finalResult(-876)
```
**Example**  
```js
// '0.3'
finalResult(0.30000000000000004)
```

## selector-selectCorrectRegExpForCalcScreen


### selector-selectCorrectRegExpForCalcScreen~selectCorrectRegExpForCalcScreen(state, payload)

For transpile any string to correct data for calculator screen

**Kind**: inner method of [`selector-selectCorrectRegExpForCalcScreen`]  

| Param | Type | Description |
| --- | --- | --- |
| state | `Object` | RTK state.displayData |
| payload | `string` | action.payload, string for RegExp |

**Example**  
```js
//returns: '0.1 + 2214 * 21'
 selectCorrectRegExpForCalcScreen({displayData: '0'}, '   0.....1 ++ 2214 *** 21   ')
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

For pipeline a data thru all function

**Kind**: inner method of [`utils-pipeFunction`]  

| Param | Type |
| --- | --- |
| funcs | `Array.<function()>` | 


## initialState

initialState

**Kind**: global constant  

## CalcStateInterface

Interface for initialState

**Kind**: global typedef  
<!-- LINKS -->

[app-App]:#app-app
[selector-selectCalcResult]:#selector-selectcalcresult
[selector-selectCorrectRegExpForCalcScreen]:#selector-selectcorrectregexpforcalcscreen
[utils-mapAllDispatch]:#utils-mapalldispatch
[utils-pipeFunction]:#utils-pipefunction
[initialState]:#initialstate
[CalcStateInterface]:#calcstateinterface
[`app-App`]:#app-app
[`selector-selectCalcResult`]:#selector-selectcalcresult
[`selector-selectCorrectRegExpForCalcScreen`]:#selector-selectcorrectregexpforcalcscreen
[~Connect]:#utils-mapalldispatchconnect
[~mapAllDispatch]:#utils-mapalldispatchmapalldispatch
[`utils-mapAllDispatch`]:#utils-mapalldispatch
[`utils-pipeFunction`]:#utils-pipefunction
[~selectCalcResult(state)]:#selector-selectcalcresultselectcalcresultstate
[~correctBeginOfSingleNegativeNmbr(data)]:#selector-selectcalcresultcorrectbeginofsinglenegativenmbrdata
[~turnDisplayDataToArray(data)]:#selector-selectcalcresultturndisplaydatatoarraydata
[~multiplication(data)]:#selector-selectcalcresultmultiplicationdata
[~division(data)]:#selector-selectcalcresultdivisiondata
[~addition(data)]:#selector-selectcalcresultadditiondata
[~subtraction(data)]:#selector-selectcalcresultsubtractiondata
[~finalResult(data)]:#selector-selectcalcresultfinalresultdata
[new Connect()]:#new-connect
