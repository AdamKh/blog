const initialState = { articles: [], articlesCount: 0, loaded: false, err: null }

const articleRequest = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ARTICLES_REQUEST_STARTED':
      return { loaded: false }
    case 'NEW_ARTICLES_REQUEST_SUCCESS':
      return { ...state, ...action.payload, loaded: true }
    case 'NEW_ARTICLES_REQUEST_FAILURE':
      return { loaded: true, err: action.err }
    default:
      return state
  }
}

export default articleRequest
