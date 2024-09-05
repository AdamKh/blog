export default class BlogService {
  #apiBase = 'https://blog.kata.academy/api/'

  async getResource(url, method = 'GET', body = null) {
    const options = {
      method,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    if (body) {
      options.body = JSON.stringify(body)
    }

    const res = await fetch(`${this.#apiBase}${url}`, options)

    if (!res.ok) {
      throw new Error(`Ошибка ${res.status}`)
    }

    return res.json()
  }

  getArticles() {
    return this.getResource('articles/')
  }
}
