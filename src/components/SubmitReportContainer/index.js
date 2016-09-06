// @flow
import React, { Component } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextField from 'react-native-md-textinput'
import Button from 'react-native-button'
import MapView from 'react-native-maps'

import {
  fetchLocation,
  updateName,
  updateEmailAddress,
  updatePhoneNumber,
  updateDescription
} from '../../actions'

import HeaderBar from '../HeaderBar'

import type { LocationType } from '../../types'

import { INPUT_HIGHLIGHT_COLOR } from '../../styles'
import styles from './styles'

export class SubmitReportContainer extends Component {
  props: {
    dispatch: () => void,
    name: string,
    emailAddress: string,
    phoneNumber: string,
    description: string,
    location: LocationType
  }

  componentDidMount () {
    this.props.dispatch(fetchLocation())
  }

  _renderInput (label: string, inputValue: string, actionCreator: () => void, opts: Object = {}) {
    const onChange = (value) => this.props.dispatch(actionCreator(value))

    return <TextField
      label={label}
      onChangeText={onChange}
      value={inputValue}
      highlightColor={INPUT_HIGHLIGHT_COLOR}
      dense
      {...opts}
    />
  }

  _renderMap () {
    const { location } = this.props
    if (location.latitude === null || location.longitude === null) {
      return null
    }

    const initialRegion = {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.0017,
      longitudeDelta: 0.0016
    }

    const markerCoordinate = { ...location }

    return (
      <MapView style={styles.map} initialRegion={initialRegion}>
        <MapView.Marker coordinate={markerCoordinate} />
      </MapView>
    )
  }

  render () {
    const {
      dispatch,
      name,
      emailAddress,
      phoneNumber,
      description
    } = this.props
    const onChangeDescription = (value) => dispatch(updateDescription(value))

    return (
      <View style={{ flex: 1 }}>
        <HeaderBar text='Submit a report' />
        <ScrollView style={styles.container}>
          <Text>
            Please fill out the following details.
          </Text>

          {this._renderInput('Name', name, updateName)}
          {this._renderInput('Email Address', emailAddress, updateEmailAddress, { autoCorrect: false })}
          {this._renderInput('Phone Number', phoneNumber, updatePhoneNumber, { autoCorrect: false })}

          <TextInput
            placeholder='Enter a short description of the encampment'
            style={styles.description}
            value={description}
            onChangeText={onChangeDescription}
            multiline
          />

          <View style={styles.mapContainer}>
            {this._renderMap()}
          </View>

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

function mapStateToProps ({ submitReportForm, location }) {
  return {
    ...submitReportForm,
    location
  }
}

export default connect(mapStateToProps)(SubmitReportContainer)
