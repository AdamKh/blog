import { combineReducers } from 'redux'

import articleBySlug from './articleBySlug'
import articleRequest from './articlesRequest'
import pagValue from './pagValue'

export default combineReducers({
  articleBySlug,
  articleRequest,
  pagValue,
})
