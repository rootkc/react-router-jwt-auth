import { Observable } from 'rxjs'

const token = 'fe' // window.storage.getItem('token')

const api = (url, type = 'GET', body = {}) => (
  Observable.ajax({
    url,
    body,
    type,
    crossDomain: true,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
)

export default api
