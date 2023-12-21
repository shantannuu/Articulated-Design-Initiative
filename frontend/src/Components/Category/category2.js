import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import AllCategoryImage from '../Assets/All.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './category.css'
import { Link } from 'react-router-dom';
import { GetAllCategories } from '../../Apicalls/ProjectApi';



function Category2() {

  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      const response = await GetAllCategories();
      console.log(response.data)
      if (response.success) {
        setCategories(response.data);
      } else {
        console.log(response.message)
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    getCategories();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container-slider-2'>
      <div className='service-category-content'>
        <div className='service-category-content-h1'>
          <h1>Our </h1>
          <h1>Services</h1>
        </div>
        <div>
          <p>As a practice we always believe in the art of space making with emphasis on spatial experiences in the core</p>
          <Link to='/Services' className='service-category-link' >Know More</Link>
        </div>

      </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        slidesPerView={screenWidth <= 530 ? 1 : screenWidth <= 1024 ? 2 : 4}
        spaceBetween={5}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{ backgroundImage: `url(${AllCategoryImage})` }}>
          <div className="slide-content">
            <h1>All</h1>
            <p>10 Projects</p>
          </div>
          </SwiperSlide>
        {categories.map(newCategory => (<SwiperSlide style={{ backgroundImage: `url(${newCategory.categoryImage})` }}>
          <div className="slide-content">
            <h1>{newCategory.name}</h1>
            <p>10 Projects</p>
          </div>

        </SwiperSlide>))}



      </Swiper>

    </div>
  )
}

export default Category2