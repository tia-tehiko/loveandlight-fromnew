import React from 'react'

export class Contact extends React.Component {
  render() {
    return (
      <div className='footerdiv'>
        <h3>Socials</h3>
        <a
          className='linkimg'
          href='https://www.facebook.com/loveandlight_soycandles-111160530577594'
        >
          <img src='./images/fb.svg'></img>
        </a>
        <a
          className='linkimg'
          href='https://www.instagram.com/loveandlight_soycandles/'
        >
          <img src='./images/ig.svg'></img>
        </a>
      </div>
    )
  }
}

export default Contact
