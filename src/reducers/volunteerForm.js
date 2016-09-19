// @flow

import {
  VOLUNTEER_UPDATE_NAME,
  VOLUNTEER_UPDATE_EMAIL,
  VOLUNTEER_SUBMIT_FORM,
  VOLUNTEER_SUBMIT_FORM_SUCCESS,
  VOLUNTEER_SUBMIT_FORM_ERROR
} from '../constants'

function validatedState (state) {
  const { name, email } = state
  let isValid = name && name.length > 0
  isValid = isValid && email && email.length > 0

  return {
    ...state,
    isValid: isValid
  }
}

const INITIAL_STATE = {
  name: '',
  email: '',
  submitting: false,
  isValid: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case VOLUNTEER_UPDATE_NAME:
      return validatedState({
        ...state,
        name: action.payload.name
      })
    case VOLUNTEER_UPDATE_EMAIL:
      return validatedState({
        ...state,
        email: action.payload.email
      })
    case VOLUNTEER_SUBMIT_FORM:
      return {
        ...state,
        submitting: true
      }
    case VOLUNTEER_SUBMIT_FORM_SUCCESS:
    case VOLUNTEER_SUBMIT_FORM_ERROR:
      return {
        ...state,
        submitting: false
      }

    default:
      return state
  }
}
