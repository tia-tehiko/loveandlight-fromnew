import React from 'react'
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa'


export class Contact extends React.Component {
  render() {
    const style = {
      border: '1px solid #000',
      borderRadius: '50%',
      color: 'black',
      padding: '15px',
      height: '45px',
      width: '45px'
    }
    return (
      <div className='footerdiv' >
        <h3>CONNECT</h3>
        <ul className="socialFooter">
          <li className="socialItem">
            <a href="https://www.instagram.com/loveandlight_homefragrances/" className="socialLink">
              <FaInstagram style={style} />
            </a>
          </li>
          <li className="socialItem">
            <a href='https://www.facebook.com/loveandlight_soycandles-111160530577594' className="socialLink">
              <FaFacebookF style={style} />
            </a>
          </li>
          <li className="socialItem">
            <a href="mailto:loveandlighthomefragrances@gmail.com" className="socialLink">
              <FaEnvelope style={style} />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Contact