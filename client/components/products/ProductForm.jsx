import React from 'react'

class ProductForm extends React.Component {
  state = {
    values: {
      name: '',
      size: '',
      wick: '',
      price: '',
      img: '',
      details: '',
      gift_boxed: '',
      lifespan: '',
      type: 'candles'
    },
    types: ['candles', 'diffusers']
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('/api/v1/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.values)
    })
    .then(console.log)
    .catch(console.log)
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    })
  }

  render() {
    const { state, handleChange, handleSubmit } = this
    const { values, types } = state
    const { name, size, wick, price, img, details, gift_boxed, lifespan, type } = values
    return (
      <form onSubmit={handleSubmit} className="form" id="login-form" noValidate>
        <div className="form-row">Type:
          <select name="type" id="types" onChange={handleChange} value={type} >
            {types.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <div className="form-row">Name:
          <input type="text" name="name" onChange={handleChange} value={name} />
        </div>
        <div className="form-row">Size:
          <input type="text" name="size" onChange={handleChange} value={size} />
        </div>
        {type === 'diffusers' ? (
          <div className="form-row">Lifespan:
            <input type="text" name="lifespan" onChange={handleChange} value={lifespan} />
          </div>
        ) : (
          <div className="form-row">Wick:
            <input type="text" name="wick" onChange={handleChange} value={wick} />
          </div>
        )}
        <div className="form-row">Price:
          <input type="number" name="price" onChange={handleChange} value={price} />
        </div>
        <div className="form-row">Image:
          <input type="text" name="img" onChange={handleChange} value={img} />
        </div>
        <div className="form-row">Details:
          <input type="text" name="details" onChange={handleChange} value={details} />
        </div>
        <div className="form-row">Gift Boxed:
          <input type="text" name="gift_boxed" onChange={handleChange} value={gift_boxed} />
        </div>
        <p>
          <input type="submit" className="btn" value="Add product" />
        </p>
      </form>
    )
  }
}

export default ProductForm
