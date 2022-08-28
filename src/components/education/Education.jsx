import React from 'react'
import './education.css'
import {FaSchool, FaBookOpen} from 'react-icons/fa'
import {IoSchoolSharp} from 'react-icons/io5'

const Education = () => {
  return (
    <section id='education'>
      <h5>What's My Background</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <article className='education'>
          <div className='education__head'>
            <h3>Bachelor of Science</h3>
            <h5>(2017 - 2022)</h5>
          </div>
          
          <ul className='education__list'>
            <li>
              <FaSchool className='education__list-icon'/>
              <p>BRAC University</p>
            </li>
            <li>
              <FaBookOpen className='education__list-icon'/>
              <p>Computer Science and Engineering</p>
            </li>
            <li>
              <IoSchoolSharp className='education__list-icon'/>
              <p>CGPA 3.39</p>
            </li>
          </ul>
        </article> 
        {/* bsc ends here */}

        <article className='education'>
          <div className='education__head'>
            <h3>Higher Secondary Certificate</h3>
            <h5>(2014 - 2016)</h5>
          </div>
          
          <ul className='education__list'>
            <li>
              <FaSchool className='education__list-icon'/>
              <p>Dhaka College</p>
            </li>
            <li>
              <FaBookOpen className='education__list-icon'/>
              <p>Science</p>
            </li>
            <li>
              <IoSchoolSharp className='education__list-icon'/>
              <p>GPA 5</p>
            </li>
          </ul>
        </article> 
        {/* HSC ends here */}

        <article className='education'>
          <div className='education__head'>
            <h3>Secondary School Certificate</h3>
            <h5>(2009 - 2014)</h5>
          </div>
          
          <ul className='education__list'>
            <li>
              <FaSchool className='education__list-icon'/>
              <p>Motijheel Model High School and College</p>
            </li>
            <li>
              <FaBookOpen className='education__list-icon'/>
              <p>Science</p>
            </li>
            <li>
              <IoSchoolSharp className='education__list-icon'/>
              <p>GPA 5</p>
            </li>
          </ul>
        </article> 
        {/* SSC ends here */}

      </div>
    </section>
  )
}

export default Education