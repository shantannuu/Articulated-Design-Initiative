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

// const serviceCategoryData = [
//     {
//         "name": "Architecture",
//         "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702609074/ADI/ADI--3/dmjgxogzzyu3g073dn0q.jpg"
//     },
//     {
//         "name": "Interior",
//         "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608950/ADI/ADI--1/j3dpmpxqxnercu6az2jf.jpg",
//     },
//     {
//         "name": "Urban Planning and Landscape",
//         "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608964/ADI/ADI--1/tjxdqifrfajyr9rvdybt.jpg"
//     },
//     {
//         "name": "Product Design",
//         "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608958/ADI/ADI--1/myrjkp50henrkgllhpmm.jpg"
//     },
//     {
//         "name": "All",
//         "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608946/ADI/ADI--1/cjlzqiabp8aulqnnkhz6.jpg"
//     },
//     {
//         "name": "All",
//         "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608946/ADI/ADI--1/cjlzqiabp8aulqnnkhz6.jpg"
//     }
// ]

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
  // const [data, setData] = useState([]);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    getCategories();
    // setData(serviceCategoryData);
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
          <Link to='/' className='service-category-link' >Know More</Link>
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