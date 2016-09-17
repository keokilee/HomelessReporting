// @flow
import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

import { navigationPopRoute } from '../../actions'

import BackgroundImage from '../BackgroundImage'
import HeaderBar from '../HeaderBar'
import NavButton from '../NavButton'

import styles from './styles'

export class VolunteerContainer extends Component {
  props: {
    dispatch: () => void
  }

  _renderBackButton () {
    const { dispatch } = this.props
    const onBackButtonPress = () => dispatch(navigationPopRoute())

    return <NavButton text='Back' onPress={onBackButtonPress} />
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <HeaderBar text='Volunteer' leftNavButton={this._renderBackButton()} />
        <BackgroundImage>
          <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Volunteer stuff</Text>
          </ScrollView>
        </BackgroundImage>
      </View>
    )
  }
}

export default connect()(VolunteerContainer)
