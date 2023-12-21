import React, { useState } from 'react'
import './About.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
function About() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    return (
        <div className='About-main-page-section'>
            <h1 className='About-main-page-section-h1'>Our Story</h1>
            <p className='About-main-page-section-p'><FontAwesomeIcon icon={faQuoteLeft} />  As a practice we always believe in the art of space making with emphasis on spatial experiences in the core <FontAwesomeIcon icon={faQuoteRight} /></p>
            <div className='About-main-page-container'>
                <div className='About-main-page-images'>
                    <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702909175/dmy1lg2xv7uascyinzug.png' />
                </div>
                <div className='About-main-page-content'>
                    <div className='About-main-page-header'>
                        <h1 className='About-main-page-section-h1'>Aditya Bhasarkar</h1>
                        <h3>Creative Head</h3>
                    </div>
                    <div className='About-main-page-para'>
                        <p>Ar. Aditya V Basarkar graduated from PVP College of Architecture, Pune in 2015.
                            He worked in Mumbai and Delhi on various residential, institutional, and commercial
                            spaces. After having 6 years of professional experience, he co-founded
                            his practice in mid-2020, named Articulated Design Initiative with his partner
                            Manali.
                            The studio is engaged in both Architectural as well as Interior Design Projects.
                            We enjoy doing Holiday Homes, Standalone Architectural projects, Residential
                            Interiors as well as Commercial Spaces.
                            Aditya believes to have a well-rounded personality. He is an avid traveller
                            and loves cooking.</p>
                    </div>
                </div>
            </div>
            <div className='About-main-page-container'>
                <div className='About-main-page-images'>
                    <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702909203/rwhgb4guwzu2ziuofv8j.png' />
                </div>
                <div className='About-main-page-content'>
                    <div className='About-main-page-header'>
                        <h1 className='About-main-page-section-h1'>Manali P.</h1>
                        <h3>Creative Head</h3>
                    </div>
                    <div className='About-main-page-para'>
                        <p>Ar. Manali graduated from Kamla Raheja Institute of Architecture &Environmental Studies, Mumbai in
                            2017. She worked in Mumbai and Belgaum on various residential, Hospitality, Medical, Landscape and Commercial Architecture and Interior spaces. After having
                            5 years of professional experience  she co-founded in mid-2020, practice named Articulated Design Initiative with her partner Aditya. The studio is engaged in both Architectural as well as Interior Design Projects.
                            We enjoy doing Holiday Homes, Standalone Architectural projects, Residential Interiors as well as Commercial Spaces. Manali is a fitness and an environmental enthusiast. She also pursues several interests such as advanced Yoga practise, Sports, travelling, trekking etc. She is very much fond of Pet animals and exploring new places.</p>
                    </div>
                </div>
            </div>
            <div className='about-section-slider'>
                <h1 className='About-main-page-section-h1'>Behind the design.</h1>
                <p className='About-main-page-section-p'><FontAwesomeIcon icon={faQuoteLeft} />  Our Team <FontAwesomeIcon icon={faQuoteRight} /></p>
                <Swiper
                    slidesPerView={screenWidth <= 530 ? 1 : screenWidth <= 1024 ? 2 : 3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702909175/dmy1lg2xv7uascyinzug.png' />
                        <div className='team-behind'>
                            <h1>Aditya</h1>
                            <h3>Creative Head</h3>
                            <p>Ar. Manali graduated from Kamla Raheja Institute of Architecture &Environmental Studies, Mumbai in
                                2017.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702909203/rwhgb4guwzu2ziuofv8j.png' />
                        <div className='team-behind'>
                            <h1>Aditya</h1>
                            <h3>Creative Head</h3>
                            <p>Ar. Manali graduated from Kamla Raheja Institute of Architecture &Environmental Studies, Mumbai in
                                2017.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702909175/dmy1lg2xv7uascyinzug.png' />
                        <div className='team-behind'>
                            <h1>Aditya</h1>
                            <h3>Creative Head</h3>
                            <p>Ar. Manali graduated from Kamla Raheja Institute of Architecture &Environmental Studies, Mumbai in
                                2017.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702909203/rwhgb4guwzu2ziuofv8j.png' />
                        <div className='team-behind'>
                            <h1>Aditya</h1>
                            <h3>Creative Head</h3>
                            <p>Ar. Manali graduated from Kamla Raheja Institute of Architecture &Environmental Studies, Mumbai in
                                2017.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default About