// @flow

import {
  UPDATE_NAME,
  UPDATE_EMAIL_ADDRESS,
  UPDATE_PHONE_NUMBER,
  UPDATE_DESCRIPTION
} from '../actions'

const INITIAL_FORM_STATE = {
  name: '',
  description: '',
  emailAddress: '',
  phoneNumber: '',
  image: '',
  latitude: '',
  longitude: ''
}

export default function submitReportForm (state = INITIAL_FORM_STATE, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name
      }

    case UPDATE_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload.phoneNumber
      }

    case UPDATE_EMAIL_ADDRESS:
      return {
        ...state,
        emailAddress: action.payload.emailAddress
      }

    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description
      }

    default:
      return state
  }
}
