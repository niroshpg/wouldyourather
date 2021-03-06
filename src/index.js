import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css';
import App from './components/App'
import { createStore,applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers'
import {logger} from 'redux-logger'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancer(
    applyMiddleware(
      thunkMiddleware,
      logger
    ),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
