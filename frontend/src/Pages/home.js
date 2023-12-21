import React, { useEffect, useState } from 'react'
import './home.css'
import { Parallax } from 'react-parallax'
import Img1 from '../Components/Assets/09.jpg'
import Img2 from '../Components/Assets/08.jpg'
import Img3 from '../Components/Assets/07.jpg'
import Categories from '../Components/Category/category'
import Category2 from '../Components/Category/category2'
import RecentWork from '../Components/RecentWork/RecentWork'
import About from '../Components/About/About'
// import ServiceCategory from '../Components/ServiceCategory/ServiceCategory'
import News from '../Components/News/News'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import img1 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_7.jpg'
import img2 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_8.jpg'
import img3 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_5.jpg'
import img4 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_6.jpg'
import img5 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_4.jpg'
import img6 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_1.jpg'
import img7 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_11.jpg'
import img8 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_3.jpg'
import img9 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_9.jpg'
import img10 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_10.jpg'
import { ContactUser } from '../Apicalls/ContactApi'
import { useDispatch } from 'react-redux'
import { showLoadingWithDelay } from '../redux/loaderSlice'
import Awards from '../Components/Awards/Awards'
function Home() {
  const [formResponse, setFormResponse] = useState(null);
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  useEffect(() => {
    dispatch(showLoadingWithDelay(2000));
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const onFinish = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await ContactUser(formData);
      if (response.success) {
        setFormResponse(response.message);
        setFormData({
          name: '',
          email: '',
          number: '',
          message: '',
      });
        console.log(response.message);
      } else {
        setFormResponse(response.message);
        console.log(response.message)
      }
    } catch (error) {
      setFormResponse(error.message);
      console.log(error.message);
    }

    setTimeout(() => {
      setFormResponse(null); // Clear the response message after 5 seconds
  }, 5000);
  }


  return (
    // screenWidth <= 530 ? 1 : screenWidth <= 1024 ? 2 : 4
    <>
      <div className='parallex-scoller'>
        <div className="img-box" style={ screenWidth <= 530 ? { backgroundImage: `url(${Img1})` , backgroundAttachment:'initial' } : { backgroundImage: `url(${Img1})` } }>
          <div className="content-container">
            <h1>Lanja House</h1>
          </div>
          <Link class="img-box-link" to='' >Know More</Link>
          <div className='img-box-bg'></div>
        </div>

        <div className="img-box" style={ screenWidth <= 530 ? { backgroundImage: `url(${Img2})` , backgroundAttachment:'initial' } : { backgroundImage: `url(${Img2})` } }>
          <div className="content-container">
            <h1>YC House</h1>

          </div>
          <Link class="img-box-link" to='' >Know More</Link>
        </div>



        <div className="img-box" style={ screenWidth <= 530 ? { backgroundImage: `url(${Img3})` , backgroundAttachment:'initial' } : { backgroundImage: `url(${Img3})` } }>
          <div className="content-container">
            <h1>PP House</h1>

          </div>
          <Link class="img-box-link" to='' >Know More</Link>
        </div>

        {/* <div className="img-box4">
          <div className="content-container">
            <h1>PP House</h1>
          </div>
        </div> */}

      </div>
      <RecentWork />
      <div className='All-project-deatils1'>
        <section class="section-1">

          <div class="wide reveal">
            <div class="content">
              <img src={img1} alt="" />
              <div class="hover-info">
                <div class="inside-hover-info">
                  <h3>Lanja House</h3>
                  {/* <h4>Structure</h4> */}
                  <p>The house has an east-west orientation</p>
                  {/* <a href="#">Read More</a> */}
                </div>
              </div>
            </div>
          </div>
          <div class="tall reveal">
            <div class="content">
              <img src={img2} alt="" />
              <div class="hover-info">
                <div class="inside-hover-info">
                  <h3>Lanja House</h3>
                  {/* <h4>Structure</h4> */}
                  <p>Located in the rural farmlands on the outskirts of Ratnagiri, the brief for this project was to create an ancestral home that blends in with the tranquil surroundings of Lanja</p>
                  {/* <a href="#">Read More</a> */}
                </div>
              </div>
            </div>
          </div>
          <div class="text-desc reveal">
            <h1>Lanje House</h1>
            <p>Located in the rural farmlands on the outskirts of Ratnagiri, the brief for this project was to create an ancestral home that blends in with the tranquil surroundings of Lanja. The idea was to build a place that would revive childhood nostalgia</p>
            <Link to="" className='text-desc-link'>Know More</Link>
          </div>
          <div class="medium reveal">
            <div class="content">
              <img src={img3} alt="" />
              <div class="hover-info">
                <div class="inside-hover-info">
                  <h3>Lanja House</h3>
                  {/* <h4>Structure</h4> */}
                  <p>The main entrance of the house leads you to a spacious living area, with clearstory windows along the eastern side that provide abundant morning sunlight</p>
                  {/* <a href="#">Read More</a> */}
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>

      <About />
      <Category2 />
      {/* <ServiceCategory/> */}
      {/* <Categories/> */}
      <Awards/>
      {/* <News /> */}
      <div className='contact-home-section'>
        <div className='contact-home-header'>
          <h1>Contact Us</h1>
        </div>
        
        <div className='contact-home-form'>
        {formResponse && (<div className='message-response'>
                <h1>{formResponse}</h1>
            </div>)}
          <form onSubmit={onFinish}>
            <div className='contact-form-1'>



              <input type='text' name='name' value={formData.name} id='name' className='input-form-home' placeholder='Your Name' onChange={handleInputChange} />
              <input type='text' name='email' value={formData.email} id='email' className='input-form-home' placeholder='Your Email' onChange={handleInputChange} />
              <input type='text' name='number' value={formData.number} id='number' className='input-form-home' placeholder='Your Number' onChange={handleInputChange} />
            </div>
            <div className='contact-home-form-2'>
              <textarea type='text' name='message' id='message' value={formData.message} className='input-form-home' placeholder='Your Message' onChange={handleInputChange} />
              <button type="submit" >Send Message</button>
            </div>
          </form>
        </div>
        <div className='contact-header' style={{margin:'50px 0'}}>
          <h1>You may also find us at</h1>
          <h3>Any question or remarks? Just write us a message!</h3>
        </div>
        <div className='contact-info' style={{padding:'0 250px'}}>
          <div className='info_1'>
            <FontAwesomeIcon icon={faPhone} />
            <h3>+91 7506030065</h3>
            <h3>+91 9823641608</h3>
          </div>
          <div className='info_2'>
            <FontAwesomeIcon icon={faEnvelope} />
            <h3>shantanubolate@gamil.com</h3>
            <h3>shantanubolate@gamil.com</h3>
          </div>
          <div className='info_3'>
            <FontAwesomeIcon icon={faLocationDot} />

            <p>201 , mhatare yorale , LT Road , Dahisar, west Mumabai 4000068</p>
          </div>
        </div>
        <div className='footer-social-media'>
          <h1>Follow Us At</h1>
          
            <div className='footer-social-media-icon'>
              <a href='https://instagram.com/adinitiative.in?igshid=OGQ5ZDc2ODk2ZA=='><FontAwesomeIcon icon={faInstagram} /></a>
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          

        </div>
      </div>

    </>
  )
}

export default Home;