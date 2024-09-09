const initialState = {
  user: {
    email: '',
    token: '',
    username: '',
    bio: '',
    image: null,
  },
  loggedIn: false,
  err: null,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return { ...state, user: { ...action.payload }, loggedIn: true, err: null }
    case 'USER_LOGIN_FAILURE':
      return { ...state, err: action.err }
    case 'LOGOUT':
      return {
        ...state,
        user: {},
        loggedIn: false,
      }
    default:
      return state
  }
}

export default user
