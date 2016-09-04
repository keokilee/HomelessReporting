import { combineReducers } from 'redux-loop'

import navigation from './navigation'
import location from './location'
import submitReportForm from './submitReportForm'

export default combineReducers({
  navigation,
  location,
  submitReportForm
})
