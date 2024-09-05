const initialState = { article: {}, loaded: false, err: null }

const articleBySlug = (state = initialState, action) => {
  switch (action.type) {
    case 'ARTICLE_BY_SLUG_STARTED':
      return { loaded: false }
    case 'ARTICLE_BY_SLUG_SUCCESS':
      return { ...state, ...action.payload, loaded: true }
    case 'ARTICLE_BY_SLUG_FAILURE':
      return { loaded: true, err: action.err }
    default:
      return state
  }
}

export default articleBySlug
