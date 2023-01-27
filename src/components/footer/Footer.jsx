import React from 'react'
import './Footer.css'
import {FaFacebookF, FaSnapchat, FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> Safwan</a>

      <ul>
        <li> <a href="#"> Home </a></li>
        <li> <a href="#about"> About </a></li>
        <li> <a href="#experience"> Experience </a></li>
        <li> <a href="#portfolio"> Portfolio </a></li>
        <li> <a href="#contact"> Contact </a></li>
        
      </ul>

      <div className='footer__socials'>
        <a target='_blank' href="https://facebook.com/safwan.islam20"> <FaFacebookF /> </a>
        <a target='_blank' href="https://instagram.com/safwanislam9"> <FaInstagram /> </a>
        <a target='_blank' href="https://www.snapchat.com/add/skillysafwan?share_id=MbWZAHXoQlGvj3Q3n+sG7g&locale=en_US&sid=4ebc7d2064354b81938883cce3625fb4"> <FaSnapchat /></a>

      </div>

      <div className='footer__copyright'>
        <small> &copy; Safwan Islam. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer