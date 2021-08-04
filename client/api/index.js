import request from 'superagent'

export function getFiles () {
  return request.get('/files')
    .then(res => res.body)
    .catch(err => console.log("Error: ", err.message))
}