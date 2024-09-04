import { SortFilters } from '../actions'

const initialState = SortFilters.CHEAPEST

const sortFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_FILTER':
      return action.filter
    default:
      return state
  }
}

export default sortFilter
