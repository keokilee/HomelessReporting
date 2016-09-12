// @flow
import { Effects, loop } from 'redux-loop'

import { getLocation } from '../services/location'

import {
  FETCH_LOCATION,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_ERROR,
  fetchLocationSuccess,
  fetchLocationError
} from '../actions'

import type { ActionType } from '../types'

export function getLocationEffect () {
  return getLocation().then(fetchLocationSuccess).catch(fetchLocationError)
}

type LocationStateType = {
  fetchingLocation: bool,
  latitude: ?number,
  longitude: ?number
}

const TEST_COORDS = { latitude: 21.3279758, longitude: -157.9390669 }

const INITIAL_LOCATION_STATE = {
  fetchingLocation: false,
  latitude: null,
  longitude: null
}

export default function (state: LocationStateType = INITIAL_LOCATION_STATE, action: ActionType) {
  switch (action.type) {
    case FETCH_LOCATION:
      return loop(
        { ...state, fetchingLocation: true },
        Effects.promise(getLocationEffect)
      )

    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        ...action.payload.coords,
        fetchingLocation: false
      }

    case FETCH_LOCATION_ERROR:
      // TODO: Handle error properly
      return loop(
        state,
        Effects.constant(fetchLocationSuccess({ coords: TEST_COORDS }))
      )

    default:
      return state
  }
}
