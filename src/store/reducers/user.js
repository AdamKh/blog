const initialState = {
  loggedIn: false,
  err: null,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return { ...state, user: { ...action.payload }, loggedIn: true, err: null }
    case 'USER_LOGIN_FAILURE':
      return { ...state, err: action.err }
    case 'LOGOUT': {
      localStorage.removeItem('token')
      return {
        ...state,
        user: {},
        loggedIn: false,
      }
    }
    case 'GET_CURRENT_USER':
      return { ...state, user: { ...action.payload }, loggedIn: true, err: null }
    case 'GET_CURRENT_USER_FAILURE':
      return state
    default:
      return state
  }
}

export default user
