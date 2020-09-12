import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1/'

export function getCandles () {
  return request
    .get(`${apiURL}candles`)
    .then(response =>  response.body)
}


export function getDiffusers () {
  return request
    .get(`${apiURL}diffusers`)
    .then(response =>  response.body)
}


