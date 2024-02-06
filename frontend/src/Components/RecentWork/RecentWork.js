import React, { useRef, useEffect, useState } from 'react'
import './RecentWork.css'
import { GetAllProjects, getCategoryById } from '../../Apicalls/ProjectApi';
import { useDispatch } from 'react-redux';
import { showLoadingWithDelay } from '../../redux/loaderSlice';
import { useNavigate } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,Navigation } from 'swiper/modules';
function RecentWork() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  function truncateText(text, maxWords) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    const truncatedText = truncatedWords.join(' ');
    return truncatedText;
  }

  const getProjects = async () => {
    try {
      dispatch(showLoadingWithDelay(2000));
      const response = await GetAllProjects();
      dispatch(showLoadingWithDelay(2000));
      if (response.success) {
        const categoryIds = response.data.map(project => project.category);
        const categoryNames = await fetchCategoryNames(categoryIds);

        // Update project data with category names
        const projectsWithData = response.data.map((project, index) => ({
          ...project,
          categoryName: categoryNames[index],
        }));
        console.log(projectsWithData)
        setData(projectsWithData);
      } else {
        console.log(response.message)
      }
    } catch (error) {
      dispatch(showLoadingWithDelay(2000));
      console.log(error.message);
    }
  }


  const fetchCategoryNames = async (categoryIds) => {
    const promises = categoryIds.map(async (categoryId) => {
      const response = await getCategoryById(categoryId);  // Adjust this based on your actual API
      return response.success ? response.data.name : null;
    });

    return Promise.all(promises);
  }



  useEffect(() => {
    getProjects();
  }, []);


  return (
    <>
      {screenWidth <= 530 ?

        <div className='recent-work'>
          <h1 className='recent-work-header'>Recent Works</h1>
          <Swiper autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
            {data.map((newData, index) =>

            (
              index < 5 && (
                <SwiperSlide>
                  <div className='work-card' onClick={() => { Navigate(`/Project/${newData._id}`); }}>
                    <div className='work-card-img'>
                      <img src={newData.projectImage} />
                    </div>
                    <div className='work-card-content'>
                      <h3>{newData.categoryName}</h3>
                      <h1>{newData.title}</h1>
                      <h3>{newData.shortDescription === "" ? '' : `${truncateText(newData.shortDescription, 15)}...`}</h3>

                    </div>
                  </div>
                </SwiperSlide>
              )))}




          </Swiper>
        </div>


        : <div className='recent-work'>
          <h1 className='recent-work-header'>Recent Works</h1>
          <div className='work-card-grid'>
            {data.map((newData, index) =>

            (
              index < 5 && (<div className='work-card' onClick={() => { Navigate(`/Project/${newData._id}`); }}>
                <div className='work-card-img'>
                  <img src={newData.projectImage} />
                </div>
                <div className='work-card-content'>
                  <h3>{newData.categoryName}</h3>
                  <h1>{newData.title}</h1>
                  <h3>{newData.shortDescription === "" ? '' : `${truncateText(newData.shortDescription, 15)}...`}</h3>

                </div>
              </div>)))}
          </div>
        </div>}
    </>
  )

}

export default RecentWork