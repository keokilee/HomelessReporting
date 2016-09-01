import { combineReducers } from 'redux-loop'

import navigation from './navigation'
import submitReportForm from './submitReportForm'

export default combineReducers({
  navigation,
  submitReportForm
})
