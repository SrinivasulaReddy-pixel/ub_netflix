import { requests } from './api-service'

export const API = {
  getTest: (payload) => requests.get('/addresses', payload),
}
