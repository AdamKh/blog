export default class BlogService {
  #apiBase = 'https://blog.kata.academy/api'

  #token = localStorage.getItem('token') || ''

  async getResource(url, method = 'GET', body = null) {
    const options = {
      method,
      headers: {
        Authorization: `Bearer ${this.#token}`,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    if (body) {
      options.body = JSON.stringify(body)
    }

    const res = await fetch(`${this.#apiBase}${url}`, options)

    if (!res.ok) {
      const error = await res.json()
      throw error
    }

    if (method !== 'DELETE') return res.json()

    return null
  }

  getArticles(page = 1) {
    const postsPerPage = 20
    const offset = (page - 1) * postsPerPage
    return this.getResource(`/articles/?limit=${postsPerPage}&offset=${offset}`)
  }

  getArticleBySlug(slug) {
    return this.getResource(`/articles/${slug}`)
  }

  async login(user) {
    const response = await this.getResource('/users/login', 'POST', user)
    this.#token = response.user.token
    localStorage.setItem('token', response.user.token)

    return response
  }

  async registerNewUser(user) {
    const response = await this.getResource('/users', 'POST', user)
    this.#token = response.user.token
    localStorage.setItem('token', response.user.token)

    return response
  }

  editProfile(user) {
    return this.getResource('/user', 'PUT', user)
  }

  getCurrentUser() {
    return this.getResource('/user')
  }

  async postArticle(body) {
    const res = await this.getResource('/articles', 'POST', body)
    return res
  }

  deleteArticle(slug) {
    return this.getResource(`/articles/${slug}`, 'DELETE')
  }

  editArticle(slug, body) {
    return this.getResource(`/articles/${slug}`, 'PUT', body)
  }

  like(slug) {
    return this.getResource(`/articles/${slug}/favorite`, 'POST')
  }

  unlike(slug) {
    return this.getResource(`/articles/${slug}/favorite`, 'DELETE')
  }
}
