import React from 'react'

export class About extends React.Component {
  render() {
    return (
      <div className='footerdiv'>
        <h3>SUBSCRIBE</h3>
        <p className="subInfo">
          We also visit local markets around Brisbane every weekend. </p>
        <p>Sign Up to our emails to be notified where we will be every weekend.
        </p>
        <input
          type='text'
          name='name'
          placeholder='Enter Email Here'
          className='subInput'
          autoComplete='false'
        ></input>
        <button className='subButton'>Keep me in the know</button>
      </div>
    )
  }
}

export default About
