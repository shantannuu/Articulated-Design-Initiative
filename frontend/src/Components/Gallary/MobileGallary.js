import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Gallary.css'

import { Navigation } from 'swiper/modules';
function MobileGallary() {
    return (
        <div className='mobile-view-gallary'>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide style={{backgroundImage:`url(${"https://res.cloudinary.com/dyhf9rqfz/image/upload/v1706365349/Articulated-Design-Initiative/gallary/NOW_8918_gteqjq.jpg"})`}}>
                    <video width="100%" controls autoplay loop>
                        <source src='https://res.cloudinary.com/dyhf9rqfz/video/upload/v1703526899/1703526702082928_ms6sur.mp4' />
                    </video>
                </SwiperSlide>
                <SwiperSlide style={{backgroundImage:`url(${"https://res.cloudinary.com/dyhf9rqfz/image/upload/v1706365403/Articulated-Design-Initiative/gallary/NOW_8814_gxikws.jpg"})`}}>
                    <video width="100%" controls autoplay loop>
                        <source src='https://res.cloudinary.com/dyhf9rqfz/video/upload/v1703557115/1703556845806985_rf9mdr.mp4'  />
                    </video>
                </SwiperSlide>
                <SwiperSlide style={{backgroundImage:`url(${"https://res.cloudinary.com/dyhf9rqfz/image/upload/v1706365451/Articulated-Design-Initiative/gallary/NOW_8837_sw2qqq.jpg"})`}}>
                    <video width="100%" controls autoplay loop>
                        <source src='https://res.cloudinary.com/dyhf9rqfz/video/upload/v1703559158/1703558962536100_lzccrh.mp4'  />
                    </video>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MobileGallary