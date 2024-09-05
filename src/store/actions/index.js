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
