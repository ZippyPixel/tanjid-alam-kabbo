import React from 'react'
import './portfolio.css'
import Nourish from '../../assets/nourish.jpg'
import PortfolioWeb from '../../assets/portfolio-web.jpg'
import Weather from '../../assets/weather.jpg'

const data = [
  {
    id: 1,
    image: Nourish,
    title: 'Nourish - A Learning App for Kids',
    language: 'Language: Kotlin',
    github: 'https://github.com/ZippyPixel/Nourish-Android-App'
  },
  {
    id: 2,
    image: PortfolioWeb,
    title: 'Portfolio Website',
    language: 'Framework: React',
    github: 'https://github.com/ZippyPixel/'
  },
  {
    id: 3,
    image: Weather,
    title: 'Weather App',
    language: 'Framework: Flutter',
    github: 'https://github.com/ZippyPixel/Weather-App-Open-Weather-API-'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, language, github }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{language}</h5>
                <a href={github} className='btn' target='_blank'>Github</a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio