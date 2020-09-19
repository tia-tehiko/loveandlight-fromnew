import request from 'superagent'

export function getCandles() {
  return request
    .get('http://localhost:3000/api/v1/candles')
    .then(response => response.body)
}


export function getDiffusers() {
  return request
    .get('http://localhost:3000/api/v1/diffusers')
    .then(response => response.body)
}

export function getScents() {
  return request
    .get('http://localhost:3000/api/v1/scents')
    .then(response => response.body)
}



