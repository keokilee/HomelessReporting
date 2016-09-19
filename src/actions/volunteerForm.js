// @flow

import {
  VOLUNTEER_UPDATE_NAME,
  VOLUNTEER_UPDATE_EMAIL,
  VOLUNTEER_SUBMIT_FORM,
  VOLUNTEER_SUBMIT_FORM_SUCCESS,
  VOLUNTEER_SUBMIT_FORM_ERROR
} from '../constants'

export function updateVolunteerName (name) {
  return {
    type: VOLUNTEER_UPDATE_NAME,
    payload: {
      name
    }
  }
}

export function updateVolunteerEmail (email) {
  return {
    type: VOLUNTEER_UPDATE_EMAIL,
    payload: {
      email
    }
  }
}

export function submitVolunteerForm () {
  return {
    type: VOLUNTEER_SUBMIT_FORM
  }
}

export function submitVolunteerFormSuccess () {
  return {
    type: VOLUNTEER_SUBMIT_FORM_SUCCESS
  }
}

export function submitVolunteerFormError () {
  return {
    type: VOLUNTEER_SUBMIT_FORM_ERROR
  }
}
