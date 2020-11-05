import React from 'react'

const initialState = {
  name: '',
  size: '',
  wick: '',
  price: '',
  img: '',
  details: '',
  gift_boxed: '',
  lifespan: '',
  type: 'candles'
}

class ProductForm extends React.Component {
  state = {
    values: {
      ...initialState
    },
    types: ['candles', 'diffusers'],
    disabled: false,
    error: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const tempState = { ...this.state.values }
    let count = 0;

    tempState.type === 'candles' ? tempState.lifespan = "" : tempState.wick = ""

    for (const key in tempState) {
      if (tempState[key] === "") count++
    }

    this.setState({ error: '' })

    if (count - 1 === 0) {
      if (this.state.disabled) return

      this.setState({ disabled: true })
      
      fetch('/api/v1/products', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.values)
      })
      .then(() => {
        this.setState({ 
          values: {
            ...initialState
          },
          disabled: false,
          error: ''
        })
      })
      .catch(() => this.setState({ disabled: false, error: 'Server error!' }))
    } else {
      this.setState({ error: 'Fill out all fields before adding a new product!' })
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      },
      error: ''
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
          {this.state.error}
          <input type="submit" className="btn" value="Add product" disabled={state.disabled} />
        </p>
      </form>
    )
  }
}

export default ProductForm
