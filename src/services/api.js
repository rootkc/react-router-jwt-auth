import { Observable } from 'rxjs'

const token = localStorage.getItem('token')

const api = (url, method = 'GET', body = {}) => (
  Observable.ajax({
    url,
    body,
    method,
    crossDomain: true,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
)

export default api
