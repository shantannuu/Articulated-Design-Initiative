import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './News.css'
import { Autoplay,Navigation } from 'swiper/modules';
function News() {
    return (
        <div className='new2-section'>
            <h1 className='new2-section-header'>What's New ?</h1>
            <h3 className='new2-section-header-h3'>Recently Published</h3>
            <Swiper autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} navigation={true} modules={[Autoplay,Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className='new2-container'>
                        <div className='new2-image'>
                            <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1706539532/Articulated-Design-Initiative/media/kbda-logo-nodate_rpaku0.png' />
                        </div>
                        <div className='new2-content'>
                            <div className='new2-header'>
                                <h1>Kohler Bold Design Awards</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            </div>
                            <div className='new2-footer'>
                                <h3>Lanja Project</h3>
                                <h3>21.09.2022</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='new2-container'>
                        <div className='new2-image'>
                            <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575731/Articulated-Design-Initiative/media/t2hnpoprikmnsqbcl2bl.png' />
                        </div>
                        <div className='new2-content'>
                            <div className='new2-header'>
                                <h1>Good Homes India</h1>
                                <h3><a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/p/Cib1jDJoWW4/'>Click here to Read more about BREEZY HOUSE Article on their official instagram account</a></h3>
                            </div>
                            <div className='new2-footer'>
                                <h3>BREEZY HOUSE project</h3>
                                <h3>13 sept 22</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='new2-container'>
                        <div className='new2-image'>
                            <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575723/Articulated-Design-Initiative/media/pv7p6cixddaebbea8dpd.png' />
                        </div>
                        <div className='new2-content'>
                            <div className='new2-header'>
                                <h1>Arch Daily</h1>
                                <h3><a target="_blank" rel="noopener noreferrer" href='https://www.archdaily.com/1007001/lanja-house-articulated-design-initiative-adi'>Click here to Read more about this Article on Arch Daily</a></h3>
                            </div>
                            <div className='new2-footer'>
                                <h3>Lanja Project by Hana Abdel</h3>
                                <h3>September 18, 2023</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='new2-container'>
                        <div className='new2-image'>
                            <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575728/Articulated-Design-Initiative/media/pihzyufclfni8o3yjucw.png' />
                        </div>
                        <div className='new2-content'>
                            <div className='new2-header'>
                                <h1>Architectural Digest</h1>
                                <h3><a target="_blank" rel="noopener noreferrer" href='https://www.architecturaldigest.in/story/this-1100-square-foot-maharashtra-home-embraces-simple-living-in-a-coastal-town/'>Click here to Read more about Lanja Project Article by Ashna Lulla</a></h3>
                                <h3><a target="_blank" rel="noopener noreferrer" href='https://www.architecturaldigest.in/story/raw-materiality-creates-a-nostalgic-1350-square-foot-apartment-in-navi-mumbai-articulated-design-initiative/'>Click here to Read more about HOUSE OF FLAMBOYANCE Article by Rupali Sebastian</a></h3>
                            </div>
                            <div className='new2-footer'>
                                <h3>Lanja Project By Ashna Lulla</h3>
                                <h3>20 June 2023</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                
            </Swiper>

        </div>
    )
}

export default News