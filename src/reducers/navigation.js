// @flow
import { NAVIGATION_PUSH_ROUTE, NAVIGATION_POP_ROUTE } from '../actions'
import { NavigationExperimental } from 'react-native'

import type { ActionType, NavigationRouteType } from '../types'
import { submitReportRoute } from '../routes'

const { StateUtils: NavigationStateUtils } = NavigationExperimental

type NavigationStateType = { index: number, routes: Array<NavigationRouteType> }
const initialState = {
  index: 0,
  routes: [submitReportRoute()]
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
    default:
      return state
  }
}
