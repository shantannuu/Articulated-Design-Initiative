import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import BannerImg6 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/about.jpg'
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
                        <Link to='/' className='about-link' >Know More</Link>

                    </div>

                </div>

                <div className='about-img'>
                    <img src={BannerImg6} />
                </div>
            </div>
        </div>
    )
}

export default About