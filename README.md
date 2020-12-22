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

| Module                                       | Description |
| -------------------------------------------- | ----------- |
| [app-App]                                    |
| [calcLogic-correctBeginOfSingleNegativeNmbr] |
| [calcLogic-finalResult]                      |
| [selector-selectCalcResult]                  |
| [selector-selectCorrectRegExpForCalcScreen]  |
| [calcLogic-turnDisplayDataToArray]           |
| [utils-mapAllDispatch]                       |
| [utils-pipeFunction]                         |

## Constants

| Name           | Description  |
| -------------- | ------------ |
| [initialState] | initialState |

## Typedefs

| Name                 | Description                |
| -------------------- | -------------------------- |
| [CalcStateInterface] | Interface for initialState |

## app-App

### app-App~App(\[placeToRender\])

Returns instance of Reef.js (whole SPA)

**Kind**: inner method of [`app-App`]

| Param             | Type     | Default   |
| ----------------- | -------- | --------- |
| \[placeToRender\] | `string` | `'#root'` |

**Example**

```js
App('#cool-root').render()
```

## calcLogic-correctBeginOfSingleNegativeNmbr

### calcLogic-correctBeginOfSingleNegativeNmbr~correctBeginOfSingleNegativeNmbr(data)

Function for handle of early data

**Kind**: inner method of [`calcLogic-correctBeginOfSingleNegativeNmbr`]

| Param | Type     | Description |
| ----- | -------- | ----------- |
| data  | `string` | from state  |

## calcLogic-finalResult

### calcLogic-finalResult~finalResult(data)

For correct final result calculation

**Kind**: inner method of [`calcLogic-finalResult`]  
**Returns**: `string` - correct final answer

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| data  | `number` | final answer |

**Example**

```js
@see [test]
```

## selector-selectCalcResult

-   [selector-selectCalcResult]
    -   [~selectCalcResult(state)]
    -   [~multiplication(data)]
    -   [~division(data)]
    -   [~addition(data)]
    -   [~subtraction(data)]

### selector-selectCalcResult~selectCalcResult(state)

Selector for getting calc result, main logic

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `string` - result of calculation

| Param             | Type     | Description                                                     |
| ----------------- | -------- | --------------------------------------------------------------- |
| state             | `Object` | Redux state                                                     |
| state.displayData | `string` | data from calc screen, f.e. '2 + 456 \* 9', spaces are required |

### selector-selectCalcResult~multiplication(data)

Function for calc multiplication

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| data  | `Array.<(string | number)>`   | specific arrays of numbers and strings (operators and operands) |

**Example**

```js
// [4, '+', 12]
multiplication([4, '+', 3, '*', 4])
```

### selector-selectCalcResult~division(data)

Function for calc division

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| data  | `Array.<(string | number)>`   | specific arrays of numbers and strings (operators and operands) |

**Example**

```js
// [7, '+', 1]
division([7, '+', 4, '÷', 4])
```

### selector-selectCalcResult~addition(data)

Function for calc addition

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `number` - result of addition all numbers in Array

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| data  | `Array.<(string | number)>`   | specific arrays of numbers and strings (operators, operands and anything else) |

**Example**

```js
// 229
addition([null, 2, '+', 225, 1, 1])
```

### selector-selectCalcResult~subtraction(data)

Function for calc subtraction

**Kind**: inner method of [`selector-selectCalcResult`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| data  | `Array.<(string | number)>`   | specific arrays of numbers and strings (operators and operands) |

**Example**

```js
// [4, '+', 33]
subtraction([4, '+', 36, '-', 3])
```

## selector-selectCorrectRegExpForCalcScreen

### selector-selectCorrectRegExpForCalcScreen~selectCorrectRegExpForCalcScreen(state, payload)

For transpile any string to correct data for calculator screen

**Kind**: inner method of [`selector-selectCorrectRegExpForCalcScreen`]

| Param   | Type     | Description                       |
| ------- | -------- | --------------------------------- |
| state   | `Object` | RTK state.displayData             |
| payload | `string` | action.payload, string for RegExp |

**Example**

```js
//returns: '0.1 + 2214 * 21'
selectCorrectRegExpForCalcScreen(
    { displayData: '0' },
    '   0.....1 ++ 2214 *** 21   '
)
```

## calcLogic-turnDisplayDataToArray

### calcLogic-turnDisplayDataToArray~turnDisplayDataToArray(data)

Function for convert input sting to specific arrays of numbers and strings (operators and operands)

**Kind**: inner method of [`calcLogic-turnDisplayDataToArray`]  
**Returns**: `Array.<(string|number)>` - specific arrays of numbers and strings (operators and operands)

| Param | Type     | Description |
| ----- | -------- | ----------- |
| data  | `string` | from state  |

## utils-mapAllDispatch

-   [utils-mapAllDispatch]
    -   [~Connect]
        -   [new Connect()]
    -   [~mapAllDispatch]

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

| Param | Type                 |
| ----- | -------------------- |
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

[app-app]: #app-app
[calclogic-correctbeginofsinglenegativenmbr]: #calclogic-correctbeginofsinglenegativenmbr
[calclogic-finalresult]: #calclogic-finalresult
[selector-selectcalcresult]: #selector-selectcalcresult
[selector-selectcorrectregexpforcalcscreen]: #selector-selectcorrectregexpforcalcscreen
[calclogic-turndisplaydatatoarray]: #calclogic-turndisplaydatatoarray
[utils-mapalldispatch]: #utils-mapalldispatch
[utils-pipefunction]: #utils-pipefunction
[initialstate]: #initialstate
[calcstateinterface]: #calcstateinterface
[`app-app`]: #app-app
[`calclogic-correctbeginofsinglenegativenmbr`]: #calclogic-correctbeginofsinglenegativenmbr
[`calclogic-finalresult`]: #calclogic-finalresult
[test]: https://github.com/zloid/math-calc/blob/master/__tests__/calcAppLogic/functions/pipeFunction.test.js
[`selector-selectcalcresult`]: #selector-selectcalcresult
[`selector-selectcorrectregexpforcalcscreen`]: #selector-selectcorrectregexpforcalcscreen
[`calclogic-turndisplaydatatoarray`]: #calclogic-turndisplaydatatoarray
[~connect]: #utils-mapalldispatchconnect
[~mapalldispatch]: #utils-mapalldispatchmapalldispatch
[`utils-mapalldispatch`]: #utils-mapalldispatch
[`utils-pipefunction`]: #utils-pipefunction
[~selectcalcresult(state)]: #selector-selectcalcresultselectcalcresultstate
[~multiplication(data)]: #selector-selectcalcresultmultiplicationdata
[~division(data)]: #selector-selectcalcresultdivisiondata
[~addition(data)]: #selector-selectcalcresultadditiondata
[~subtraction(data)]: #selector-selectcalcresultsubtractiondata
[new connect()]: #new-connect
