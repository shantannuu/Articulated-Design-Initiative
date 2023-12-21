import React from 'react'
import BannerImg1 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A1.jpg'
import BannerImg2 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A2.png'
import BannerImg3 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A3.jpg'
import BannerImg4 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A4.jpg'


// import './Award.css'
function Award() {
  return (
    <div className='award-section'>
      <h1 className='award-section-header'>Awards</h1>
      <div className='award-section-card-grid'>
        <div className='award-card' >
          <div className='award-card-img'>
            <img src={BannerImg1} />
          </div>
          <div className='award-card-content'>
            <h3>2023</h3>
            {/* <h1>Wooden Imperial</h1> */}
            <h3>KOHLER Bold Design Award</h3>
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
        </div>
      </div>
    </div>
  )
}

export default Award