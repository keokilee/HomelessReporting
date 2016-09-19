// @flow
import React, { Component } from 'react'
import { View, ScrollView, Text, TextInput, Image, Platform } from 'react-native'
import { connect } from 'react-redux'
import TextField from 'react-native-md-textinput'
import Button from 'react-native-button'
import ImagePicker from 'react-native-image-picker'

import {
  navigationPopRoute,
  fetchLocation,
  updateName,
  updateEmailAddress,
  updatePhoneNumber,
  updateDescription,
  setImageUri,
  submitForm
} from '../../actions'

import BackgroundImage from '../BackgroundImage'
import HeaderBar from '../HeaderBar'
import NavButton from '../NavButton'
import MapView from '../MapView'

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
    imageUri: string,
    location: LocationType,
    isValid: bool,
    submitting: bool
  }

  componentDidMount () {
    this.props.dispatch(fetchLocation())
  }

  _renderBackButton () {
    const { dispatch } = this.props
    const onBackButtonPress = () => dispatch(navigationPopRoute())

    return <NavButton text='Back' onPress={onBackButtonPress} />
  }

  _renderMdField (label: string, inputValue: string, actionCreator: () => void, opts: Object = {}) {
    const onChange = (value) => this.props.dispatch(actionCreator(value))

    return <TextField
      label={label}
      onChangeText={onChange}
      value={inputValue}
      highlightColor={INPUT_HIGHLIGHT_COLOR}
      textColor='white'
      dense
      {...opts}
    />
  }

  _showImagePicker () {
    const { dispatch } = this.props

    ImagePicker.showImagePicker(response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        const uri = Platform.OS === 'ios' ? response.uri.replace('file://', '') : response.uri
        dispatch(setImageUri(uri))
      }
    })
  }

  _imagePickerLabel () {
    const { imageUri } = this.props
    return imageUri ? 'Change Image' : 'Upload an Image'
  }

  _renderImageToUpload () {
    const { imageUri } = this.props
    if (!imageUri) {
      return null
    }

    return <Image source={{ uri: imageUri, isStatic: true }} style={styles.imageToUpload} />
  }

  _renderSubmitButton () {
    const { dispatch, isValid, submitting } = this.props
    const disabled = !isValid || submitting
    let buttonContainerStyles = [styles.buttonContainer, styles.submitButtonContainer]
    if (disabled) {
      buttonContainerStyles.push(styles.disabledButtonContainer)
    }

    const onSubmitForm = () => dispatch(submitForm())

    return (
      <Button
        containerStyle={buttonContainerStyles}
        style={styles.button}
        onPress={onSubmitForm}
      >
        Submit
      </Button>
    )
  }

  render () {
    const {
      dispatch,
      location,
      name,
      emailAddress,
      phoneNumber,
      description
    } = this.props

    const onChangeDescription = (value) => dispatch(updateDescription(value))
    const onShowImagePicker = () => this._showImagePicker()

    return (
      <View style={{ flex: 1 }}>
        <BackgroundImage>
          <HeaderBar text='Submit a report' leftNavButton={this._renderBackButton()} />
          <ScrollView style={styles.container}>
            <View style={styles.formSection}>
              <Text style={styles.sectionHeader}>Encampment Information</Text>

              <View styles={styles.imageToUploadContainer}>
                {this._renderImageToUpload()}
              </View>

              <Button
                containerStyle={styles.buttonContainer}
                style={styles.button}
                onPress={onShowImagePicker}
              >
                {this._imagePickerLabel()}
              </Button>

              <TextInput
                placeholder='Describe the encampment'
                placeholderTextColor='white'
                style={styles.description}
                value={description}
                onChangeText={onChangeDescription}
                multiline
              />
            </View>

            <View style={styles.formSection}>
              <Text style={styles.sectionHeader}>Encampment Location</Text>

              <View style={styles.mapContainer}>
                <MapView styles={styles.map} location={location} />
              </View>
            </View>

            <View style={styles.formSection}>
              <Text style={styles.sectionHeader}>Your Contact Information</Text>

              {this._renderMdField('Name', name, updateName)}
              {this._renderMdField('Email Address', emailAddress, updateEmailAddress, { autoCorrect: false, autoCapitalize: 'none' })}
              {this._renderMdField('Phone Number', phoneNumber, updatePhoneNumber, { autoCorrect: false })}
            </View>

            {this._renderSubmitButton()}
          </ScrollView>
        </BackgroundImage>
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
