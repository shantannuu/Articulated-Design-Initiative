import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceCategory.css'
import BannerImg1 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/card1.jpg'
import BannerImg2 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/card2.jpg'
import BannerImg3 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/card3.jpg'
import BannerImg4 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/card4.jpg'
import BannerImg5 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/card5.jpg'
import BannerImg6 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/card6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';




function ServiceCategory() {
    return (
        <div className='service-category-section'>
            <div className='service-category-container'>
                <div className='service-category-slider'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        navigation={true}
                        modules={[EffectCoverflow, Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>

                            <img src={BannerImg1} />
                            <h1 className='header-slider-h1'>Architecture</h1>
                        </SwiperSlide>
                        <SwiperSlide>

                            <img src={BannerImg2} />
                            <h1 className='header-slider-h1'>Interior</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BannerImg3} />
                            <h1 className='header-slider-h1'>Urban Planning and<br /> Landscape</h1>
                        </SwiperSlide>
                        <SwiperSlide>

                            <img src={BannerImg4} />
                            <h1 className='header-slider-h1'>Product Design</h1>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='service-category-content'>
                    <div className='service-category-content-h1'>
                        <h1>Our </h1>
                        <h1>Services</h1>
                    </div>

                    <p>As a practice we always believe in the art of space making with emphasis on spatial experiences in the core</p>
                    <Link to='/' className='service-category-link' >Know More</Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCategory