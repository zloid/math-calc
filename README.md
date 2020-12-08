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

## app-App

### app-App~App(\[placeToRender\])

Returns instance of Reef.js (whole SPA)

**Kind**: inner method of `app-App`

| Param             | Type     | Default   |
| ----------------- | -------- | --------- |
| \[placeToRender\] | `string` | `'#root'` |

**Example**

```js
App('#cool-root').render()
```

<!-- LINKS -->
