// @flow
import React, { Component } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextField from 'react-native-md-textinput'
import Button from 'react-native-button'

import { updateName } from '../../actions'

import HeaderBar from '../HeaderBar'

import styles from './styles'

export class SubmitReportContainer extends Component {
  props: {
    dispatch: () => void,
    name: string
  }

  _onChangeName = (value) => this.props.dispatch(updateName(value))

  render () {
    const { name } = this.props

    return (
      <View style={{ flex: 1 }}>
        <HeaderBar text='Submit a report' />
        <ScrollView style={styles.container}>
          <Text>
            Please fill out the following details.
          </Text>

          <TextField
            label={'Name'}
            onChange={this._onChangeName}
            value={name}
            highlightColor={'#00C853'}
            dense
          />

          <TextField
            label={'Email Address'}
            onChange={this._onChangeName}
            value={name}
            highlightColor={'#00C853'}
            keyboardType={'email-address'}
            dense
          />

          <TextField
            label={'Phone Number'}
            onChange={this._onChangeName}
            value={name}
            highlightColor={'#00C853'}
            keyboardType={'numeric'}
            dense
          />

          <Button
            containerStyle={styles.buttonContainer}
            style={styles.button}
          >
            Submit
          </Button>
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return state.submitReportForm
}

export default connect(mapStateToProps)(SubmitReportContainer)
