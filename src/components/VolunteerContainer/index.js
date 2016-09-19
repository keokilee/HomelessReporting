// @flow
import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Button from 'react-native-button'

import {
  navigationPopRoute,
  updateVolunteerName,
  updateVolunteerEmail,
  submitVolunteerForm
} from '../../actions'

import BackgroundImage from '../BackgroundImage'
import HeaderBar from '../HeaderBar'
import NavButton from '../NavButton'
import MaterialTextInput from '../MaterialTextInput'

import styles from './styles'

export class VolunteerContainer extends Component {
  props: {
    dispatch: () => void,
    name: string,
    email: string,
    submitting: boolean,
    isValid: boolean
  }

  _renderBackButton () {
    const { dispatch } = this.props
    const onBackButtonPress = () => dispatch(navigationPopRoute())

    return <NavButton text='Back' onPress={onBackButtonPress} />
  }

  _renderSubmitButton () {
    const { dispatch, isValid, submitting } = this.props
    const disabled = !isValid || submitting
    let buttonContainerStyles = [styles.buttonContainer]
    if (disabled) {
      buttonContainerStyles.push(styles.buttonDisabledContainer)
    }

    const onSubmitForm = () => dispatch(submitVolunteerForm())

    return (
      <Button
        containerStyle={styles.buttonContainer}
        style={styles.button}
        onPress={onSubmitForm}
      >
        Submit
      </Button>
    )
  }

  render () {
    const { dispatch, name, email } = this.props
    const onChangeName = (value) => dispatch(updateVolunteerName(value))
    const onChangeEmail = (value) => dispatch(updateVolunteerEmail(value))

    return (
      <View style={{ flex: 1 }}>
        <HeaderBar text='Volunteer' leftNavButton={this._renderBackButton()} />
        <BackgroundImage>
          <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Volunteer</Text>

            <MaterialTextInput label='Name' value={name} onChange={onChangeName} />
            <MaterialTextInput label='Email Address' value={email} onChange={onChangeEmail} />
            {this._renderSubmitButton()}
          </ScrollView>
        </BackgroundImage>
      </View>
    )
  }
}

const mapStateToProps = (volunteerForm) => volunteerForm

export default connect(mapStateToProps)(VolunteerContainer)
