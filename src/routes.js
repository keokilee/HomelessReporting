// @flow
import React from 'react'

import type { NavigationRouteType } from './types'
import SubmitReportContainer from './components/SubmitReportContainer'

export default {
  submitReport: () => <SubmitReportContainer />
}

export function submitReportRoute (): NavigationRouteType {
  return {
    key: 'submitReport',
    title: 'Submit Report'
  }
}
