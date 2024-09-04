import { combineReducers } from 'redux'

import visibilityFilter from './visibilityFilter'
import ticketsRequest from './ticketsRequest'
import sortFilter from './sortFilter'

export default combineReducers({
  visibilityFilter,
  ticketsRequest,
  sortFilter,
})
