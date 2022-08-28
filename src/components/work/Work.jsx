import React from 'react'
import './work.css'
import X from '../../assets/x.png'
import Question from '../../assets/question.png'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        logo: X,
        name: 'X - Integrated Marketing Agency',
        duration: 'May 2018 - Mar 2021',
        role: 'ENGAGEMENT OFFICER',
        type: 'Part Time',
        description: 'Main part of the job was Handling customer queries and complaints. Also, Escalating customer Feedback and serious issues to team leaders. I had the opportunity of Analyzing query and response of team members.'
    },
    {
        logo: Question,
        name: '?????',
        duration: 'today - long time',
        role: 'HIRE ME',
        type: 'Full Time',
        description: '“Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.” - Eric S. Raymond.'
    }
]

const Work = () => {
    return (
        <section id='work'>
            <h5>Where I Have Worked</h5>
            <h2>Job Experience</h2>

            <Swiper className="container work__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}>
                {
                    data.map(({ logo, name, duration, role, type, description }, index) => {
                        return (
                            <SwiperSlide key={index} className="work">
                                <div className="work__image">
                                    <img src={logo} />
                                </div>
                                <h5 className='job'>{name}</h5>
                                <small className='job__duration'>{duration}</small>
                                <h2> <b className='job__role'>{role}</b> <small className='job__type'>{type}</small></h2>
                                <small className='job__description'>{description}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Work