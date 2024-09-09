import { combineReducers } from 'redux'

import articleBySlug from './articleBySlug'
import articleRequest from './articlesRequest'
import pagValue from './pagValue'
import user from './user'

export default combineReducers({
  articleBySlug,
  articleRequest,
  pagValue,
  user,
})
