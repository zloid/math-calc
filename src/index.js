import App from './app/App'
import mapAllDispatch from './utils/mapAllDispatch'
import store from './app/store'

document.body.innerHTML = /* html */ '<div role="mainId" id="root"></div>'

!globalThis.mapAllDispatch && (globalThis.mapAllDispatch = mapAllDispatch)

App('#root').render()
// render each time when dispatch redux actions
store.subscribe(() => {
    App('#root').render()
})
