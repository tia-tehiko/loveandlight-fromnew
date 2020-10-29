import request from 'superagent'

export function getCandles() {
  return request
    .get('http://localhost:3000/api/v1/candles')
    .then((response) => response.body)
}

export function getDiffusers() {
  return request
    .get('http://localhost:3000/api/v1/diffusers')
    .then((response) => response.body)
}

export function getScents() {
  return request
    .get('http://localhost:3000/api/v1/scents')
    .then((response) => response.body)
}

export function postToCart(item) {
  return request
    .post('/api/v1/cart')
    .send({ item })
    .then((response) => response.body)
}

export function login(loginData) {
  return request
    .post('/api/v1/auth/login')
    .send(loginData)
    .then(({ body }) => {
      if (body.msg) throw new Error(body.msg)
      return body
    })
}

export function fetchSession () {
  return request
    .get('/api/v1/auth/login/success')
    .withCredentials()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Credentials', 'true')
    .then(res => {
      if(res.status === 200) return res.body
      throw new Error("failed to authenticated user")
    })
}

export function register (newUserDetails) {
  return request
    .post('/api/v1/auth/register')
    .send(newUserDetails)
    .then(res => {
      if(res.status === 200) return res.body
      throw new Error("failed to register user")
    })
}

export function billingShipping (billingShippingDetails) {
  return request
    .post('/api/v1/billing-shipping')
    .send(billingShippingDetails)
    .then(res => {
      if(res.status === 200) return res.body
      throw new Error("failed to submit resources")
    })
}

export function getBillingAndShippingDetails () {
  return request
    .get('/api/v1/billing-shipping')
    .then(res => {
      if(res.status === 200) return res.body
      throw new Error("failed to get resources")
    })
}

export function getCartItems () {
  return request
    .get('/api/v1/cart')
    .then(res => {
      if(res.status === 200) return res.body
      throw new Error("failed to get resources")
    })
}
