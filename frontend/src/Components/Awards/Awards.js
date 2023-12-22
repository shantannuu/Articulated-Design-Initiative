import React from 'react'
import './Awards.css'
import { Link } from 'react-router-dom'
function Awards() {
  return (
    <div className='award-section'>
      <h1 className='award-section-header'>Media</h1>
      <div className='award-section-card-grid'>
        <div className='award-card'>
          <div className='award-card-img'>
            <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703161615/Articulated-Design-Initiative/Awards/zr1yvep8uxqcsexs0dhx.jpg" />
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
            <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703161625/Articulated-Design-Initiative/Awards/hi92aojocgullhgk5xla.jpg" />
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
            <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703161623/Articulated-Design-Initiative/Awards/ugbxvcg5llxhulvvdwz1.jpg" />
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
            <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703161622/Articulated-Design-Initiative/Awards/hpvumrnsb8lsmiy6z42v.png" />
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