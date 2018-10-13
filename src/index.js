import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import rootStore from './reducers/root.reducer'
import { Provider } from 'react-redux'
import initialState from './initialState'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(rootStore, initialState, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
