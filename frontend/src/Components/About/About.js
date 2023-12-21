import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
function About() {
    return (
        <div className='about-section'>
            <div className='about-container'>
                <div className='about-content'>
                    <h1>About</h1>
                    <h1>Us</h1>
                    <p>Welcome to [Firm Name], where innovation meets timeless design.
                        At [Firm Name], we believe that architecture is not just about creating structures; it's about shaping experiences, fostering connections, and inspiring the world around us. With a legacy spanning [number of years] years, our firm has been at the forefront of [city/country]'s architectural landscape, pushing boundaries and redefining possibilities.

                    </p>
                    <div className='div-about-link'>
                        <Link to='/About' className='about-link' >Know More</Link>

                    </div>

                </div>

                <div className='about-img'>
                    <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703161224/Articulated-Design-Initiative/AboutUs/fm9wateuklkigvanzexe.jpg' />
                </div>
            </div>
        </div>
    )
}

export default About