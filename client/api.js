import request from 'superagent'

const serverURL = '/api/v1'

export function getMoves () {
  return request
    .get(`${serverURL}/moves`)
    .then(response => response.body)
}

export function getMusic () {
  return request
    .get(`${serverURL}/music`)
    .then(response => {
      return response.body
    })
}



