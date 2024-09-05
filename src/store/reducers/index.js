import { combineReducers } from 'redux'

import articleBySlug from './articleBySlug'
import articleRequest from './articlesRequest'

export default combineReducers({
  articleBySlug,
  articleRequest,
})
