import { Observable } from 'rxjs'

const api = (url, method = 'GET', body = {}, token) => (
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
