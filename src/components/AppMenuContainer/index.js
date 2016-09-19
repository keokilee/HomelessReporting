// @flow
import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'

import type { NavigationRouteType } from '../../types'

import { navigationPushRoute } from '../../actions'
import { learnRoute, volunteerRoute, submitReportRoute } from '../../routes'
import BackgroundImage from '../BackgroundImage'

import styles from './styles'

export class AppMenuContainer extends Component {
  props: {
    dispatch: () => void
  }

  _renderLink (route: NavigationRouteType, image: any, text: string) {
    const { dispatch } = this.props
    const onPress = () => dispatch(navigationPushRoute(route))

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.appLink}>
          <Image source={image} style={styles.appLinkIcon} />
          <Text style={styles.appLinkText}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render () {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <View style={styles.appLogo}>
            <Image source={require('../../assets/Leaf-256.png')} />
            <Text style={styles.appTitle}>Halea</Text>
          </View>

          <View style={styles.appLinks}>
            {this._renderLink(learnRoute(), require('../../assets/Library-Books-256.png'), 'Learn')}
            {this._renderLink(submitReportRoute(), require('../../assets/Add-New-256.png'), 'Request Homeless Aid')}
            {this._renderLink(volunteerRoute(), require('../../assets/Clock-02-256.png'), 'Volunteer')}
          </View>
        </View>
      </BackgroundImage>
    )
  }
}

export default connect()(AppMenuContainer)
