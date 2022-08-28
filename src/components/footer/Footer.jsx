import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, Fa500Px} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Tanjid Alam Kabbo</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#work">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/kabbo97"><FaFacebookF /></a>
        <a href="https://www.instagram.com/_kabbo/"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/kabbo/"><FaLinkedinIn/></a>
        <a href="https://github.com/ZippyPixel"><FaGithub/></a>
        <a href="https://500px.com/p/TanjidAlamKabbo"><Fa500Px/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Tanjid Alam Kabbo. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer