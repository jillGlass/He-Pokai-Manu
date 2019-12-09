import request from 'superagent'

export default function fetch () {
  return request.get(`/api/v1/`)
    .then(res => res.body)
    .catch((err) => err.message)
}
