// @flow
import React, { Component, PropTypes } from 'react'
import { BackAndroid, StatusBar, View, NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'

import routes from '../../routes'

const { CardStack: NavigationCardStack } = NavigationExperimental

class NavigationContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  _handleBackAction () {
    return null
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }

  _renderScene (sceneProps) {
    const { index, routes: routeProps } = sceneProps.navigationState
    const route = routeProps[index]
    return routes[route.key](route.props)
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <NavigationCardStack
          direction='vertical'
          navigationState={this.props.navigation}
          renderScene={this._renderScene} />
      </View>
    )
  }
}

function mapStateToProps ({ navigation }) {
  return {
    navigation
  }
}

export default connect(mapStateToProps)(NavigationContainer)
