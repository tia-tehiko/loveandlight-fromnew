import React from 'react'

export class About extends React.Component {
  render() {
    return (
      <div className='footerdiv'>
        <h3>Stay In The Know</h3>
        <p>
          We also visit local markets around Brisbane every weekend. Sign Up to
          our emails to be notified where we will be every weekend.
        </p>
        <label>Subscribe Here</label>
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
