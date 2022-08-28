import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {Fa500Px} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kabbo/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ZippyPixel" target="_blank"><BsGithub/></a>
        <a href="https://500px.com/p/TanjidAlamKabbo" target="_blank"><Fa500Px/></a>
    </div>
  )
}

export default HeaderSocial