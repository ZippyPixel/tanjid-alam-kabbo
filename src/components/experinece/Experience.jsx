import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GrMysql } from 'react-icons/gr'
import { SiHtml5, SiJavascript, SiCss3, SiFlutter, SiReact, SiAndroid } from 'react-icons/si'
import { SiJava, SiPython, SiKotlin, SiMysql } from 'react-icons/si'
import {SiAdobephotoshop, SiAdobeillustrator, SiMicrosoftpowerpoint} from 'react-icons/si'
import {IoLogoFigma} from 'react-icons/io5'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills Do I Have</h5>
      <h2>My Expertise</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Confident</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Confident</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiFlutter className='experience__details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiAndroid className='experience__details-icon' />
              <div>
                <h4>Android Studio</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiJava className='experience__details-icon' />
              <div>
                <h4>Java SE</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiKotlin className='experience__details-icon' />
              <div>
                <h4>Kotlin</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__others">
          <h3>Other Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <IoLogoFigma className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Confident</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiAdobephotoshop className='experience__details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiAdobeillustrator className='experience__details-icon' />
              <div>
                <h4>Illustrator</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMicrosoftpowerpoint className='experience__details-icon' />
              <div>
                <h4>PowerPoint</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience