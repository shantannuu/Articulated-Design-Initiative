import React from 'react'
import './Awards.css'
import BannerImg1 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A1.jpg'
import BannerImg2 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A2.png'
import BannerImg3 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A3.jpg'
import BannerImg4 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A4.jpg'
import BannerImg5 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/09.jpg'
import BannerImg6 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/07.jpg'
import BannerImg7 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/08.jpg'
import BannerImg8 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A4.jpg'
import { Link } from 'react-router-dom'
function Awards() {
  return (
    <div className='award-section'>
      <h1 className='award-section-header'>Awards</h1>
      <div className='award-section-card-grid'>
        <div className='award-card'>
          <div className='award-card-img'>
            <img src={BannerImg1} />
          </div>
          <div className='award-card-content'>
            <h3>2023</h3>
            {/* <h1>Wooden Imperial</h1> */}
            <h3>KOHLER Bold Design Award</h3>
          </div>
          <div className='award-project'>
            <h3>Architecture</h3>
            <Link to='/' className='award-project'>See Project</Link>
          </div>
        </div>
        <div className='award-card'>
          <div className='award-card-img'>
            <img src={BannerImg2} />
          </div>
          <div className='award-card-content'>
            <h3>2023</h3>
            {/* <h1>Head Board</h1> */}
            <h3>Crude, contrary—and killing it: Meet the auteur of awkwardness.</h3>
          </div>
          <div className='award-project'>
            <h3>Architecture</h3>
            <Link to='/' className='award-project'>See Project</Link>
          </div>
        </div>
        <div className='award-card'>
          <div className='award-card-img'>
            <img src={BannerImg3} />
          </div>
          <div className='award-card-content'>
            <h3>2023</h3>
            {/* <h1>Head Board</h1> */}
            <h3>Crude, contrary—and killing it: Meet the auteur of awkwardness.</h3>
          </div>
          <div className='award-project'>
            <h3>Architecture</h3>
            <Link to='/' className='award-project'>See Project</Link>
          </div>
        </div>
        <div className='award-card'>
          <div className='award-card-img'>
            <img src={BannerImg4} />
          </div>
          <div className='award-card-content'>
            <h3>2023</h3>
            {/* <h1>Head Board</h1> */}
            <h3>Crude, contrary—and killing it: Meet the auteur of awkwardness.</h3>
          </div>
          <div className='award-project'>
            <h3>Architecture</h3>
            <Link to='/' className='award-project'>See Project</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards