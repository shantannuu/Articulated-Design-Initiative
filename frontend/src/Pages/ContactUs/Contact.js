import React, { useEffect, useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { ContactUser } from '../../Apicalls/ContactApi'
function Contact() {
    const [formResponse, setFormResponse] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const onFinish = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            const response = await ContactUser(formData);
            if (response.success) {
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    message: '',
                });
                setFormResponse(response.message);
                console.log(response.message);
            } else {
                console.log(response.message)
                setFormResponse(response.message);
            }
        } catch (error) {
            console.log(error.message);
            setFormResponse(error.message);
        }

        setTimeout(() => {
            setFormResponse(null); // Clear the response message after 5 seconds
        }, 5000);
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const styles = {
        backgroundImage: `url(https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703162357/Articulated-Design-Initiative/ContactUs/lgybsurybynlg4djupmb.png)`
      };

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (
        <div className='Contact-section'>
            {formResponse && (<div className='message-response'>
                <h1>{formResponse}</h1>
            </div>)}
            <div className='Contact-container'>
                <div className='contact-header'>
                    <h1>Contact Us</h1>
                    <h3>Any question or remarks? Just write us a message!</h3>
                </div>
                <div className='contact-info'>
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
                <div className='contact-form'>
                    <form onSubmit={onFinish}>
                        <div className='contact-form-1'>



                            <input type='text'  name='name' id='name' value={formData.name} className='input-form' placeholder='Your Name' onChange={handleInputChange} />
                            <input type='text' name='email' id='email' value={formData.email} className='input-form' placeholder='Your Email' onChange={handleInputChange} />
                            <input type='text' name='number' id='number' value={formData.number} className='input-form' placeholder='Your Number' onChange={handleInputChange} />
                        </div>
                        <div className='contact-form-2'>
                            <textarea type='text' name='message' id='message' value={formData.message} className='input-form' placeholder='Your Message' onChange={handleInputChange} />
                            <button type="submit" >Send Message</button>
                        </div>
                    </form>
                </div>

            </div>
            <div className='gooogle-map-location' style={ screenWidth <= 530 ? {backgroundImage:'none'} : styles  }>

                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2185154843364!2d72.83895597921715!3d19.185655935737127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b75150c62a55%3A0xef68a5276a6b0074!2sSumati%20Sadan!5e0!3m2!1sen!2sin!4v1702466832744!5m2!1sen!2sin" width="700px" height="500px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='map-content'>
                    <h1>Find us on google maps</h1>
                    <h3>Thank you for connecting with us</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact