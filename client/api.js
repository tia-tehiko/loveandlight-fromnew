import request from 'superagent'

const candleUrl = 'http://localhost:3000/api/v1/candles/'

export function getCandles () {
  return request
    .get(candleUrl)
    .then(response =>  response.body)
}
