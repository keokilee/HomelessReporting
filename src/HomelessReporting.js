// @flow
import 'babel-polyfill'

import React from 'react'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { install } from 'redux-loop'

import reducers from './reducers'

import NavigationContainer from './components/NavigationContainer'

function finalCreateStore () {
  const enhancers = compose(
    install(),
    global.reduxNativeDevTools ? global.reduxNativeDevTools() : noop => noop
  )

  const store = createStore(reducers, {}, enhancers)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

const store = finalCreateStore()

export default function () {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  )
}
