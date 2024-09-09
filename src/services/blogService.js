export default class BlogService {
  #apiBase = 'https://api.realworld.io/api/'

  #token = ''

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

    return res.json()
  }

  getArticles(page = 1) {
    const postsPerPage = 20
    const offset = (page - 1) * postsPerPage
    return this.getResource(`articles/?limit=${postsPerPage}&offset=${offset}`)
  }

  getArticleBySlug(slug) {
    return this.getResource(`articles/${slug}`)
  }

  async login(user) {
    const response = await this.getResource('/users/login', 'POST', user)
    this.#token = response.user.token

    return response
  }

  registerNewUser(user) {
    return this.getResource('/users', 'POST', user)
  }

  editProfile(user) {
    return this.getResource('/user', 'PUT', user)
  }
}
