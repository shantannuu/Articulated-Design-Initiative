import React, { useEffect, useRef, useState } from 'react'
import BannerImg from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/service01.jpg'

import './Services.css'

import { Link, useNavigate } from 'react-router-dom';
import { GetAllCategories, GetAllProjects, getProjectsByCategory } from '../../Apicalls/ProjectApi'
import { useDispatch } from 'react-redux';
import { showLoadingWithDelay } from '../../redux/loaderSlice';


function Services() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('');
  const getCategories = async () => {
    try {
      dispatch(showLoadingWithDelay(2000));
      const response = await GetAllCategories();
      dispatch(showLoadingWithDelay(2000));
      if (response.success) {
        setCategories(response.data);
      } else {
        console.log(response.message)
      }
    } catch (error) {
      dispatch(showLoadingWithDelay(2000));
      console.log(error.message);
    }
  }

  const getProjects = async () => {
    try {
      dispatch(showLoadingWithDelay(2000));
      const response = await GetAllProjects();
      dispatch(showLoadingWithDelay(2000));
      console.log(response.data)
      if (response.success) {
        setProjects(response.data);
      } else {
        console.log(response.message)
      }
    } catch (error) {
      dispatch(showLoadingWithDelay(2000));
      console.log(error.message);
    }
  }

  const handleCategoryClick = async (selectedCategory) => {
    setCategory(selectedCategory);

    try {
      const response = await getProjectsByCategory(selectedCategory);
      console.log(response.data)
      if (response.success) {
        setProjects(response.data);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.error('Error searching projects:', error);
    }
  };


  useEffect(() => {
    getCategories();
    getProjects();

    window.scrollTo(0, 0);
  }, []);

  return (

    <div className='Services-container'>
      <div
        className='Services-banner' style={ screenWidth <= 530 ? { backgroundImage: `url(${BannerImg})` , backgroundAttachment:'initial' } : { backgroundImage: `url(${BannerImg})` } }>
        <div className='img-box-bg'></div>
        <div className='banner-content'>
          <h3>Explore our work</h3>
          <h1>See what we can do together</h1>
          <Link className='bannerBtn' to='/' >View All Projects</Link>
        </div>
      </div>
      <div className='category-menu'>
        <ul>
          <li><Link className='categorymenuBtn' onClick={() => getProjects()}>All</Link></li>
          {categories.map(ele => (
            <li><Link className='categorymenuBtn' onClick={() => handleCategoryClick(ele._id)}>{ele.name}</Link></li>
          ))}

          
        </ul>
      </div>
      <div className='All-project-deatils1'>
        
        {projects.length > 0 ? projects.map((element, index) => (
          index % 2 === 0 ? (
            element.details.length > 0 &&
            <section class="section-1">
              <div class="tall reveal">
                <div class="content">
                  <img src={element.details[0].tallImage.image} alt="" />
                  <div class="hover-info">
                    <div class="inside-hover-info">
                      <h3>{element.title}</h3>
                      {/* <h4>Structure</h4> */}
                      <p>{element.details[0].tallImage.description}</p>
                      {/* <a href="#">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="wide reveal">
                <div class="content">
                  <img src={element.details[0].wideImage.image} alt="" />
                  <div class="hover-info">
                    <div class="inside-hover-info">
                      <h3>{element.title}</h3>
                      {/* <h4>Structure</h4> */}
                      <p>{element.details[0].wideImage.description}</p>
                      {/* <a href="#">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>


              <div class="medium reveal">
                <div class="content">
                  <img src={element.details[0].mediumImage1.image} alt="" />
                  <div class="hover-info">
                    <div class="inside-hover-info">
                      <h3>{element.title}</h3>
                      {/* <h4>Structure</h4> */}
                      <p>{element.details[0].mediumImage1.description}</p>
                      {/* <a href="#">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-desc reveal">
                <h1>{element.title}</h1>
                <p>{element.details[0].detailDescription1}</p>
                <Link to={`/Project/${element._id}`} className='text-desc-link'>Know More</Link>
              </div>




            </section>
          ) : (
            element.details.length > 0 &&
            <section class="section-1">

              <div class="wide reveal">
                <div class="content">
                  <img src={element.details[0].wideImage.image} alt="" />
                  <div class="hover-info">
                    <div class="inside-hover-info">
                      <h3>{element.title}</h3>
                      {/* <h4>Structure</h4> */}
                      <p>{element.details[0].wideImage.description}</p>
                      {/* <a href="#">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="tall reveal">
                <div class="content">
                  <img src={element.details[0].tallImage.image} alt="" />
                  <div class="hover-info">
                    <div class="inside-hover-info">
                      <h3>{element.title}</h3>
                      {/* <h4>Structure</h4> */}
                      <p>{element.details[0].tallImage.description}</p>
                      {/* <a href="#">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-desc reveal">
                <h1>{element.title}</h1>
                <p>{element.details[0].detailDescription1}</p>
                <Link to={`/Project/${element._id}`} className='text-desc-link'>Know More</Link>
              </div>
              <div class="medium reveal">
                <div class="content">
                  <img src={element.details[0].mediumImage1.image} alt="" />
                  <div class="hover-info">
                    <div class="inside-hover-info">
                      <h3>{element.title}</h3>
                      {/* <h4>Structure</h4> */}
                      <p>{element.details[0].mediumImage1.description}</p>
                      {/* <a href="#">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>

            </section>
          )


        )) : <>No Projects Yet</>} 


      </div>

    </div>
  )
}

export default Services