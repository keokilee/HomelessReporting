export const UPDATE_NAME = 'UPDATE_NAME'
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

export function updateDescription (description) {
  return {
    type: UPDATE_DESCRIPTION,
    payload: {
      description
    }
  }
}
