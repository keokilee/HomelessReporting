export const NAVIGATION_PUSH_ROUTE = 'NAVIGATION_PUSH_ROUTE'
export const NAVIGATION_POP_ROUTE = 'NAVIGATION_POP_ROUTE'
export const NAVIGATION_POP_TO_INDEX = 'NAVIGATION_POP_TO_INDEX'

export function navigationPushRoute (route) {
  return {
    type: NAVIGATION_PUSH_ROUTE,
    payload: {
      route
    }
  }
}

export function navigationPopRoute () {
  return {
    type: NAVIGATION_POP_ROUTE
  }
}

export function navigationPopToIndex () {
  return {
    type: NAVIGATION_POP_TO_INDEX
  }
}
