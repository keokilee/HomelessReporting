// @flow
import {
  NAVIGATION_PUSH_ROUTE,
  NAVIGATION_POP_ROUTE,
  NAVIGATION_POP_TO_INDEX
} from '../actions'

import { NavigationExperimental } from 'react-native'

import type { ActionType, NavigationRouteType } from '../types'
import { appMenuRoute } from '../routes'

const { StateUtils: NavigationStateUtils } = NavigationExperimental

type NavigationStateType = { index: number, routes: Array<NavigationRouteType> }

const initialState = {
  index: 0,
  routes: [appMenuRoute()]
}

export default function navigation (state: NavigationStateType = initialState, { type, payload }: ActionType) {
  switch (type) {
    case NAVIGATION_PUSH_ROUTE:
      if (state.routes[state.index].key === (payload.route && payload.route.key)) {
        return state
      }

      return NavigationStateUtils.push(state, payload.route)
    case NAVIGATION_POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1) {
        return state
      }

      return NavigationStateUtils.pop(state)
    case NAVIGATION_POP_TO_INDEX:
      return initialState
    default:
      return state
  }
}
