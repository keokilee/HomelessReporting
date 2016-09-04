// @flow

export const FETCH_LOCATION = 'FETCH_LOCATION'
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS'
export const FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR'

export function fetchLocation () {
  return {
    type: FETCH_LOCATION
  }
}

export function fetchLocationSuccess (location: Object) {
  return {
    type: FETCH_LOCATION_SUCCESS,
    payload: location
  }
}

export function fetchLocationError (err: Object) {
  return {
    type: FETCH_LOCATION_ERROR,
    error: true,
    payload: err
  }
}
