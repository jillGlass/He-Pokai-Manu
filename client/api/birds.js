import request from 'superagent'

export default function fetch () {
  return request.get(`/api/v1/specific`)
    .then(res => res.body)
}
