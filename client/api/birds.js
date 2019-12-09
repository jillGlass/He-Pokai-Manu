import request from 'superagent'

const apiURL = process.env.NODE_ENV === 'test' ? 'http://localhost:3000' : ''

export default function fetch () {
  return request.get(`${apiURL}/api/v1/`)
    .then(res => res.body)
    // The following line is commented out because the catch in this function was disrupting the clarity of the error message in the componentDidMount call in App.jsx
    // .catch((err) => err.message)
}
