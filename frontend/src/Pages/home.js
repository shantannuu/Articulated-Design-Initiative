import React, { useEffect, useState } from 'react'
import './home.css'
import Category2 from '../Components/Category/category2'
import RecentWork from '../Components/RecentWork/RecentWork'
import About from '../Components/About/About'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { ContactUser } from '../Apicalls/ContactApi'
import { useDispatch } from 'react-redux'
import { showLoadingWithDelay } from '../redux/loaderSlice'
import News from '../Components/New2/News'
import Gallary from '../Components/Gallary/Gallary'
import MobileGallary from '../Components/Gallary/MobileGallary'

function Home() {
  const [formResponse, setFormResponse] = useState(null);
  const dispatch = useDispatch();
  // const [isToggled, setIsToggled] = useState(false);
  // const handleToggle = () => {
  //   setIsToggled(!isToggled);
  // };
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
      setFormResponse(null);
    }, 5000);
  }


  return (
    <>
      <div className='parallex-scoller'>
        <div className="img-box" style={screenWidth <= 530 ? { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703163123/Articulated-Design-Initiative/ParallaxBanner/q4lcsejogb2xn1s7tjao.jpg)`, backgroundAttachment: 'initial' } : { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703163123/Articulated-Design-Initiative/ParallaxBanner/q4lcsejogb2xn1s7tjao.jpg)` }}>
          <div className="content-container">
            <h1>Lanja House</h1>
          </div>
          <Link class="img-box-link" to='/Project/6581b283738dc6a8798e452c' >Know More</Link>
          <div className='img-box-bg'></div>
        </div>

        <div className="img-box" style={screenWidth <= 530 ? { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703163114/Articulated-Design-Initiative/ParallaxBanner/d0dpopmahogqwk60lpxc.jpg)`, backgroundAttachment: 'initial' } : { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703163114/Articulated-Design-Initiative/ParallaxBanner/d0dpopmahogqwk60lpxc.jpg)` }}>
          <div className="content-container">
            { screenWidth <= 530 ? <><h1 className='firstH1'>House Of </h1><h1>Flamboyance</h1></> : <h1>House Of Flamboyance</h1> }
            

          </div>
          <Link class="img-box-link" to='/Project/659272b856222613482da180' >Know More</Link>
        </div>

        <div className="img-box" style={screenWidth <= 530 ? { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1705589966/Articulated-Design-Initiative/projects/Chembur%20House/bkfuqttkkiiy1yr2ya4s.jpg)`, backgroundAttachment: 'initial' } : { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703163118/Articulated-Design-Initiative/ParallaxBanner/kw5poe6dzybdmhhx8og4.jpg)` }}>
          <div className="content-container">
            <h1>16, Chembur House</h1>

          </div>
          <Link class="img-box-link" to='/Project/65a93cd00665e138bfbe749a' >Know More</Link>
        </div>

        <div className="img-box" style={screenWidth <= 530 ? { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1707143640/Articulated-Design-Initiative/projects/House%20with%20Terraces/olntrvbfi3gzumroucpx.png)`, backgroundAttachment: 'initial' } : { backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1707143640/Articulated-Design-Initiative/projects/House%20with%20Terraces/olntrvbfi3gzumroucpx.png)` }}>
          <div className="content-container">
            <h1>43, Terrace</h1>

          </div>
          <Link class="img-box-link" to='/Project/65c0eebf0b0ca20418192ce7' >Know More</Link>
        </div>



      </div>
      <RecentWork />

      {screenWidth <= 530 ?
        ' ' : <Gallary />


      }




      {screenWidth > 530 && <div className='All-project-deatils1'>
        <section class="section-1">

          <div class="wide reveal">
            <div class="content">
              <img  src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702999179/Articulated-Design-Initiative/projects/Lanja%20House/n2j0cy1gchk3iquafh18.jpg" alt="" />
              {/* <div class="hover-info">
                <div class="inside-hover-info">
                  <h3>Lanja House</h3>
                  <h4>Structure</h4>
                  <p>The house has an east-west orientation. The main entrance of the house leads you to a spacious living area, with clearstory windows along the eastern side that provide abundant morning sunlight. Large window openings with high ceilings enable cross-ventilation and make the house appear spacious.</p>
                  <a href="#">Read More</a>
                </div>
              </div> */}
            </div>
          </div>
          <div class="tall reveal">
            <div class="content">
              <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1707464525/Articulated-Design-Initiative/projects/Lanja%20House/05_dplszw.jpg" alt="" />
              {/* <div class="hover-info">
                <div class="inside-hover-info">
                  <h3>Lanja House</h3>
                  <h4>Structure</h4>
                  <p>The simplicity of the house is accentuated by the contemporary implementation of the traditional materials. The exposed laterite finish sets a very natural backdrop, and being sustainably conscious The Kitchen and dining area are positioned in the East, and benefit from the morning light coming in</p>
                  <a href="#">Read More</a>
                </div>
              </div> */}
            </div>
          </div>
          <div class="text-desc text-desc-2 reveal">
            <h1>Lanja House</h1>
            <p>Located in the picturesque coastal town of Lanja, Ratnagiri, Maharashtra, lies a beautiful home that embodies simple living blending with its natural surroundings. The idea was to build a place that would revive childhood nostalgia</p>
            <Link class="text-desc-link" to='/Project/6581b283738dc6a8798e452c' >Know More</Link>
          </div>
          <div class="medium reveal">
            <div class="content">
              <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1707464725/Articulated-Design-Initiative/projects/Lanja%20House/02_pbeft4.jpg" alt="" />
              {/* <div class="hover-info">
                <div class="inside-hover-info">
                  <h3>Lanja House</h3>
                  <h4>Structure</h4>
                  <p>At the core of the design concept was sustainable living and construction. The bungalow was built with a composite load-bearing construction technique that uses a laterite stone foundation minimising damage to the fertile red soil native to the region. The home balances natural light, sloped Mangalore-tiled roofs, exposed laterite walls, and rough Kota stone flooring drawing on a palette of indigenous materials.</p>
                  <a href="#">Read More</a>
                </div>
              </div> */}
            </div>
          </div>

        </section>
      </div>}

      <About />

      <Category2 />
      {/* <Awards/> */}
      {screenWidth <= 530 &&
        <News />
      }
      {/* <Blob/> */}
      <div className='contact-home-section'>
        <div className='contact-home-header'>
          <h1>Contact Us</h1>
          {screenWidth <= 530 && <h3>Any question or remarks? Just write us a message!</h3>}
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
        <div className='contact-header' style={{ margin: '50px 0' }}>
          <h1>You may also find us at</h1>
          {screenWidth > 530 && <h3>Any question or remarks? Just write us a message!</h3>}
        </div>
        <div className='contact-info' style={{ padding: '0 250px' }}>
          <div className='info_1'>
            <FontAwesomeIcon icon={faPhone} />
           { screenWidth <= 530 ? <><h3><a href='tel:+91 7506030065'>+91 7506030065</a></h3>
            <h3><a href='tel:+91 9823641608'>+91 9823641608</a></h3></> : <><h3>+91 7506030065</h3>
            <h3>+91 9823641608</h3></> }
          </div>
          <div className='info_2'>
            <FontAwesomeIcon icon={faEnvelope} />
            <h3><a href='mailto:manali@adinitiative.in'>manali@adinitiative.in</a></h3>
            <h3><a href='mailto:Aditya@adinitiative.in'>Aditya@adinitiative.in</a></h3>

          </div>
          <div className='info_3'>
            <FontAwesomeIcon icon={faLocationDot} />

            <p>Sumati Sadan Liberty Garden Rd Number 1 Malad West Mumbai Maharashtra 400064</p>
          </div>
        </div>
        <div className='footer-social-media'>
          <h1>Follow Us At</h1>

          <div className='footer-social-media-icon'>
            <a target="_blank" rel="noopener noreferrer" href='https://instagram.com/adinitiative.in?igshid=OGQ5ZDc2ODk2ZA=='><FontAwesomeIcon icon={faInstagram} /></a>
            <a 
            // target="_blank" rel="noopener noreferrer" href='https://wa.me/+917506030065'
            ><FontAwesomeIcon icon={faWhatsapp} /></a>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>


        </div>
      </div>

    </>
  )
}

export default Home;