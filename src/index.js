import App from './app/App'
import mapAllDispatch from './utils/mapAllDispatch'
import store from './app/store'
import { DOMDidMount } from './utils/DOMDidMount'

!globalThis.mapAllDispatch && (globalThis.mapAllDispatch = mapAllDispatch)

document.body.innerHTML = /* html */ '<div role="mainId" id="root"></div>'

App('#root').render()
DOMDidMount()
// render each time when dispatch redux actions
store.subscribe(() => {
    App('#root').render()
})
