export default class BlogService {
  #apiBase = 'https://blog.kata.academy/api/'

  // #apiImageBase = 'https://image.tmdb.org/t/p/w500'

  #searchId = ''

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

  async createSearchId() {
    const newSearchId = await this.getResource('/search')
    this.#searchId = newSearchId.searchId
  }

  async getTicketsList() {
    if (!this.#searchId) {
      await this.createSearchId()
    }
    return this.getResource(`/tickets?searchId=${this.#searchId}`)
  }
}
