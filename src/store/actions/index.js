import BlogService from '../../services/blogService'

const blogService = new BlogService()

export const getArticle = (slug) => (dispatch) => {
  dispatch({ type: 'ARTICLE_BY_SLUG_STARTED' })
  blogService
    .getArticleBySlug(slug)
    .then((res) => dispatch({ type: 'ARTICLE_BY_SLUG_SUCCESS', payload: res }))
    .catch((err) => dispatch({ type: 'ARTICLE_BY_SLUG_FAILURE', err }))
}

export const getArticlesRequest = (page) => (dispatch) => {
  dispatch({ type: 'NEW_ARTICLES_REQUEST_STARTED' })
  blogService
    .getArticles(page)
    .then((res) => dispatch({ type: 'NEW_ARTICLES_REQUEST_SUCCESS', payload: res }))
    .catch((err) => dispatch({ type: 'NEW_ARTICLES_REQUEST_FAILURE', err }))
}

export const setPaginationPage = (page) => ({
  type: 'SET_PAGINATION_PAGE',
  payload: page,
})

export const loginAction = (body) => (dispatch) =>
  blogService
    .login(body)
    .then((res) => {
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.user })
      return res.user
    })
    .catch((err) => {
      dispatch({ type: 'USER_LOGIN_FAILURE', err: err.errors })
      return { err: err.errors }
    })

export const createNewUserAction = (body) => (dispatch) =>
  blogService
    .registerNewUser(body)
    .then((res) => {
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.user })
      return res.user
    })
    .catch((err) => {
      dispatch({ type: 'USER_LOGIN_FAILURE', err: err.errors })
      return { err: err.errors }
    })

export const editProfileAction = (body) => (dispatch) =>
  blogService
    .editProfile(body)
    .then((res) => {
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.user })
      return res.user
    })
    .catch((err) => {
      dispatch({ type: 'USER_LOGIN_FAILURE', err: err.errors })
      return { err: err.errors }
    })

export const logoutAction = () => ({
  type: 'LOGOUT',
})

export const getCurrentUserAction = () => (dispatch) =>
  blogService.getCurrentUser().then((res) => {
    if (res) dispatch({ type: 'GET_CURRENT_USER', payload: res.user })
  })
