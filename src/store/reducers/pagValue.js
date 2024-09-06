const initialState = 1

const pagValue = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGINATION_PAGE':
      return action.payload
    default:
      return state
  }
}

export default pagValue
