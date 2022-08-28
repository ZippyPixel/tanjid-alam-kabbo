import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {MdOutlineWork} from 'react-icons/md'
import {AiFillFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a href="#work">
            <article className='about__card'>
              <MdOutlineWork className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years</small>
            </article></a>

            <a href="#portfolio">
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article> </a>
          </div>

          <p>
          I think of myself as a good problem solver and a creative individual, to me these are necessary to make progress in the software industry. I am always learning about the latest technology and developing my skills in any way possible. I am also a team player with an eye for detail.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default about