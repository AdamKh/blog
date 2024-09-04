import BlogService from '../../services/blogService'

const blogService = new BlogService()

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_WITHOUT_STOPS: 'SHOW_WITHOUT_STOPS',
  SHOW_ONE_STOPS: 'SHOW_ONE_STOPS',
  SHOW_TWO_STOPS: 'SHOW_TWO_STOPS',
  SHOW_THREE_STOPS: 'SHOW_THREE_STOPS',
}

export const setSortFilter = (filter) => ({
  type: 'SET_SORT_FILTER',
  filter,
})

export const setTicketsRequest = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TICKETS_REQUEST' })

  const fetchAllTickets = async () => {
    try {
      const res = await blogService.getTicketsList()

      // Отправляем частично загруженные данные в стор
      dispatch({ type: 'FETCH_TICKETS_SUCCESS_PARTIAL', payload: res.tickets })

      // Если есть еще билеты, продолжаем загружать
      if (!res.stop) {
        fetchAllTickets()
      } else {
        // Все билеты загружены
        dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: res.tickets })
      }
    } catch (err) {
      if (err.message.includes(500)) {
        fetchAllTickets()
      } else {
        dispatch({ type: 'FETCH_TICKETS_FAILURE', err: err.message })
      }
    }
  }

  // Начинаем рекурсивную загрузку
  fetchAllTickets()
}
