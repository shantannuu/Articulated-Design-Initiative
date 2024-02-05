import React, { useEffect, useState, useRef } from 'react'
import './Services.css'

import { Link } from 'react-router-dom';
import { GetAllCategories, GetAllProjects, getProjectsByCategory } from '../../Apicalls/ProjectApi'
import { useDispatch } from 'react-redux';
import { showLoadingWithDelay } from '../../redux/loaderSlice';

function Services() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('');

  function truncateText(text, maxWords) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    const truncatedText = truncatedWords.join(' ');
    return truncatedText;
  }

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
        className='Services-banner' style={screenWidth <= 530 ? { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1706531510/Articulated-Design-Initiative/ParallaxBanner/NOW_6744_rtkwoe.jpg)`, backgroundAttachment: 'initial' } : { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703163073/Articulated-Design-Initiative/ParallaxBanner/xt3odxnzev3v4hxobesh.jpg)` }}>
        <div className='img-box-bg'></div>
        <div className='banner-content'>
          <h3>Explore our work</h3>
          <h1>See what we can do together</h1>
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
            <>
              <section class="section-1">
                <div
                  class="tall reveal">
                  <div class="content">
                    <img src={element.details[0].tallImage.image} alt="" />
                    {element.details[0].detailDescription2 === '' ? <></> : <div class="hover-info">
                      <div class="inside-hover-info">
                        <p>{truncateText(element.details[0].detailDescription2,20)}...</p>
                      </div>
                    </div>
                    }
                  </div>
                </div>
                <div

                  class="wide reveal">
                  <div class="content">
                    <img src={element.details[0].wideImage.image} alt="" />
                    { element.details[1] && (element.details[1].detailDescription1 === '' ? <></> : <div class="hover-info">
                      <div class="inside-hover-info">
                        <p>{element.details[1] && element.details[1].detailDescription1 ? `${truncateText(element.details[1].detailDescription1,20)}...` : ''}</p>
                      </div>
                    </div>
                    )}
                  </div>
                </div>


                <div

                  class="medium reveal">
                  <div class="content">
                    <img src={element.details[0].mediumImage1.image} alt="" />
                   { element.details[1] && (element.details[1].detailDescription2 === '' ? <></> : <div class="hover-info">
                      <div class="inside-hover-info">
                        <p>{element.details[1] && element.details[1].detailDescription2 ? `${truncateText(element.details[1].detailDescription2,20)}...` : ''}</p>
                      </div>
                    </div>
                    )}
                  </div>
                </div>
                <div

                  class="text-desc text-desc-2 reveal">
                  <h1>{element.title}</h1>
                  <p>{element.details[0].detailDescription1}</p>
                  <Link
                    to={`/Project/${element._id}`}
                    className='text-desc-link'>Know More</Link>
                </div>




              </section>
              {screenWidth <= 530 ? <div style={{ padding: "20px 0" }}><hr></hr></div> : <div></div>}
            </>
          ) : (
            element.details.length > 0 &&
            <>
              <section class="section-1">

                <div class="wide reveal">
                  <div class="content">
                    <img src={element.details[0].wideImage.image} alt="" />
                    {element.details[0].detailDescription2 === '' ? <></> : <div class="hover-info">
                      <div class="inside-hover-info">
                        <p>{truncateText(element.details[0].detailDescription2,20)}...</p>
                      </div>
                    </div>}
                  </div>
                </div>
                <div class="tall reveal">
                  <div class="content">
                    <img src={element.details[0].tallImage.image} alt="" />
                    {element.details[1] && (element.details[1].detailDescription1 === '' ? <></> : <div class="hover-info">
                      <div class="inside-hover-info">
                        <p>{element.details[1] && element.details[1].detailDescription1 ? `${truncateText(element.details[1].detailDescription1,20)}...` : ''}</p>
                      </div>
                    </div>)}
                  </div>
                </div>
                <div class="text-desc text-desc-2 reveal">
                  <h1>{element.title}</h1>
                  <p>{element.details[0].detailDescription1}</p>
                  <Link

                    to={`/Project/${element._id}`} className='text-desc-link'>Know More</Link>
                </div>
                <div class="medium reveal">
                  <div class="content">
                    <img src={element.details[0].mediumImage1.image} alt="" />
                    {element.details[1] && (element.details[1].detailDescription2 === '' ? <></> : <div class="hover-info">
                      <div class="inside-hover-info">
                        <p>{element.details[1] && element.details[1].detailDescription2 ? `${truncateText(element.details[1].detailDescription2,20)}...` : ''}</p>
                      </div>
                    </div>)}
                  </div>
                </div>

              </section>
              {screenWidth <= 530 ? <div style={{ padding: "20px 0" }}><hr></hr></div> : <div></div>}
            </>
          )


        )) : <><div className='NoProjects'>No Projects Yet</div></>}


      </div>

    </div>
  )
}

export default Services