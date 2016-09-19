// @flow
import { Effects, loop } from 'redux-loop'

import { uploadImage } from '../services/images'
import { createReport } from '../services/ihs-api'

import {
  SUBMIT_FORM,
  UPDATE_NAME,
  UPDATE_EMAIL_ADDRESS,
  UPDATE_PHONE_NUMBER,
  UPDATE_DESCRIPTION,
  SET_IMAGE_URI,
  FETCH_LOCATION_SUCCESS,
  UPLOAD_PHOTO,
  UPLOAD_PHOTO_SUCCESS,
  SUBMIT_REPORT_SUCCESS,
  uploadPhoto as uploadPhotoAction,
  uploadPhotoSuccess,
  uploadPhotoError,
  submitReportSuccess,
  submitReportError
} from '../actions'

import type { ActionType } from '../types'

const INITIAL_FORM_STATE = {
  submitting: false,
  name: '',
  description: '',
  emailAddress: '',
  phoneNumber: '',
  imageUri: '',
  latitude: null,
  longitude: null,
  isValid: false
}

function uploadPhotoEffect (imageUri) {
  return uploadImage(imageUri).then(uploadPhotoSuccess).catch(uploadPhotoError)
}

function submitReportEffect (state, imageUrl) {
  const params = {
    latitude: state.latitude,
    longitude: state.longitude,
    name: state.name,
    description: state.description,
    phone: state.phoneNumber,
    photo: imageUrl
  }

  return createReport(params).then(submitReportSuccess).catch(submitReportError)
}

// Helper function for validating the form state
function validatedState (state) {
  const {
    latitude,
    longitude,
    name,
    phoneNumber,
    emailAddress,
    imageUri
  } = state

  let isValid = latitude && longitude && name.length > 0
  isValid = isValid && phoneNumber.length > 0
  isValid = isValid && emailAddress.length > 0
  isValid = isValid && imageUri.length > 0

  return {
    ...state,
    isValid: isValid
  }
}

export default function submitReportForm (state: Object = INITIAL_FORM_STATE, action: ActionType) {
  switch (action.type) {
    case UPDATE_NAME:
      return validatedState({
        ...state,
        name: action.payload.name
      })

    case FETCH_LOCATION_SUCCESS:
      return validatedState({
        ...state,
        ...action.payload.coords
      })

    case UPDATE_PHONE_NUMBER:
      return validatedState({
        ...state,
        phoneNumber: action.payload.phoneNumber
      })

    case UPDATE_EMAIL_ADDRESS:
      return validatedState({
        ...state,
        emailAddress: action.payload.emailAddress
      })

    case UPDATE_DESCRIPTION:
      return validatedState({
        ...state,
        description: action.payload.description
      })

    case SET_IMAGE_URI:
      return validatedState({
        ...state,
        imageUri: action.payload.imageUri
      })

    case SUBMIT_FORM:
      return loop(
        { ...state, submittingForm: true },
        Effects.constant(uploadPhotoAction(state.imageUri))
      )

    case UPLOAD_PHOTO:
      return loop(
        state,
        Effects.promise(uploadPhotoEffect, action.payload.imageUri)
      )

    case UPLOAD_PHOTO_SUCCESS:
      return loop(
        state,
        Effects.promise(submitReportEffect, state, action.payload.response.url)
      )

    case SUBMIT_REPORT_SUCCESS:
      return {
        ...state,
        submitting: false
      }

    default:
      return state
  }
}
