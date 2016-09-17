// @flow
import React from 'react'

import type { NavigationRouteType } from './types'
import AppMenuContainer from './components/AppMenuContainer'
import LearnContainer from './components/LearnContainer'
import VolunteerContainer from './components/VolunteerContainer'
import SubmitReportContainer from './components/SubmitReportContainer'

export default {
  appMenu: () => <AppMenuContainer />,
  learn: () => <LearnContainer />,
  volunteer: () => <VolunteerContainer />,
  submitReport: () => <SubmitReportContainer />
}

export function appMenuRoute (): NavigationRouteType {
  return {
    key: 'appMenu',
    title: 'App Menu'
  }
}

export function submitReportRoute (): NavigationRouteType {
  return {
    key: 'submitReport',
    title: 'Submit Report'
  }
}

export function learnRoute (): NavigationRouteType {
  return {
    key: 'learn',
    title: 'Learn'
  }
}


export function volunteerRoute (): NavigationRouteType {
  return {
    key: 'volunteer',
    title: 'Volunteer'
  }
}

export const routes = {
  appMenu: appMenuRoute(),
  submitReport: submitReportRoute()
}
