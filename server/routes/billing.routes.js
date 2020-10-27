const express = require('express')
const validator = require('validator')
const {
  isAuth
} = require('./middleware/auth.middleware')

const router = express.Router()

router.get('/', isAuth, (req, res) => {
  const billing = req.session.billing 
  const shipping = req.session.shipping

  if (billing || shipping) {
    res.json({
      billing,
      shipping
    })
  } else {
    res.status(406).json({
      errors: "Nothing here"
    })
  }
})

router.post('/', isAuth, (req, res, next) => {
  const post = req.body
  const errors = []

  if (validator.isEmpty(post.billing_first_name)) {
    errors.push({
      param: 'billing_first_name',
      msg: 'Required field.'
    })
  }
  if (validator.isEmpty(post.billing_last_name)) {
    errors.push({
      param: 'billing_last_name',
      msg: 'Required field.'
    })
  }
  if (!validator.isEmail(post.billing_email)) {
    errors.push({
      param: 'billing_email',
      msg: 'Invalid e-mail address.'
    })
  }

  if (validator.isEmpty(post.billing_address)) {
    errors.push({
      param: 'billing_address',
      msg: 'Required field.'
    })
  }

  if (validator.isEmpty(post.billing_city)) {
    errors.push({
      param: 'billing_city',
      msg: 'Required field.'
    })
  }

  if (!validator.isNumeric(post.billing_zip)) {
    errors.push({
      param: 'billing_zip',
      msg: 'Invalid postal code.'
    })
  }

  if (!post.sameAs) {
    if (validator.isEmpty(post.shipping_first_name)) {
      errors.push({
        param: 'shipping_first_name',
        msg: 'Required field.'
      })
    }
    if (validator.isEmpty(post.shipping_last_name)) {
      errors.push({
        param: 'shipping_last_name',
        msg: 'Required field.'
      })
    }
    if (!validator.isEmail(post.shipping_email)) {
      errors.push({
        param: 'shipping_email',
        msg: 'Invalid e-mail address.'
      })
    }

    if (validator.isEmpty(post.shipping_address)) {
      errors.push({
        param: 'shipping_address',
        msg: 'Required field.'
      })
    }

    if (validator.isEmpty(post.shipping_city)) {
      errors.push({
        param: 'shipping_city',
        msg: 'Required field.'
      })
    }

    if (!validator.isNumeric(post.shipping_zip)) {
      errors.push({
        param: 'shipping_zip',
        msg: 'Invalid postal code.'
      })
    }
  }

  if (errors.length > 0) {
    res.status(406).json({
      errors
    })
  } else {
    const billing = {}

    for (const prop in post) {
      if (prop.startsWith('billing')) {
        const key = prop.replace('billing', '').replace(/_/g, '')
        billing[key] = post[prop]
      }
    }

    req.session.billing = billing

    if (!post.sameAs) {
      const shipping = {}

      for (const prop in post) {
        if (prop.startsWith('shipping')) {
          const key = prop.replace('shipping', '').replace(/_/g, '')
          shipping[key] = post[prop]
        }
      }

      req.session.shipping = shipping
    }
    res.json({
      billing: req.session.billing,
      shipping: req.session.shipping
    })
  }
})

module.exports = router
