// @flow
import 'babel-polyfill'
import React, { Component } from 'react'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { install } from 'redux-loop'
import devTools from 'remote-redux-devtools'

import reducers from './reducers'

import NavigationContainer from './components/NavigationContainer'

function finalCreateStore () {
  const enhancers = compose(install(), devTools())
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

export default class HomelessReporting extends Component {
  render () {
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    )
  }
}
