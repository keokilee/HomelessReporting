export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_EMAIL_ADDRESS = 'UPDATE_EMAIL_ADDRESS'
export const UPDATE_PHONE_NUMBER = 'UPDATE_PHONE_NUMBER'
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
export const SET_LATITUDE = 'SET_LATITUDE'
export const SET_LONGITUDE = 'SET_LONGITUDE'

export function updateName (name) {
  return {
    type: UPDATE_NAME,
    payload: {
      name
    }
  }
}

export function updateEmailAddress (emailAddress) {
  return {
    type: UPDATE_EMAIL_ADDRESS,
    payload: {
      emailAddress
    }
  }
}

export function updatePhoneNumber (phoneNumber) {
  return {
    type: UPDATE_PHONE_NUMBER,
    payload: {
      phoneNumber
    }
  }
}

export function updateDescription (description) {
  return {
    type: UPDATE_DESCRIPTION,
    payload: {
      description
    }
  }
}
