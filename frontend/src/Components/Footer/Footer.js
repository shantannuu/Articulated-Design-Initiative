import React,{useState} from 'react'
import './Footer.css'
import logo from '../Assets/vector-03.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    return (
        <div className='footer-section'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img className='no-interaction' src={logo} />
                </div>
                <div className='footer-quick-links'>
                    <h1>Quick links</h1>
                    <div className='footer-links'>
                        <div>
                            <h3><Link to="/Services" >Projects</Link></h3>
                            <h3><Link to="/Contact" >Contact</Link></h3>
                        </div>
                        <div>
                            <h3><Link to="/About" >About</Link></h3>
                            <h3><Link to="/Media" >Media</Link></h3>
                        </div>


                    </div>

                </div>

                <div className='footer-contact'>
                    <h1>Reach us</h1>
                    <div className='footer-contact-options'>
                        <div>
                            { screenWidth <= 530 ? (
                            <><h3><span><FontAwesomeIcon icon={faPhone} /></span> <a href='tel:+91 9823641608'>+91 9823641608</a> </h3>
                            <h3><span><FontAwesomeIcon icon={faPhone} /></span> <a href='tel:+91 7506030065'>+91 7506030065</a> </h3>
                            </>) : (
                            <><h3><span><FontAwesomeIcon icon={faPhone} /></span> +91 9823641608 </h3>
                            <h3><span><FontAwesomeIcon icon={faPhone} /></span> +91 7506030065 </h3>
                            </>)}
                        </div>

                        <div className='footer-address'>
                            <p><span><FontAwesomeIcon icon={faLocationDot} /></span>  Sumati Sadan
                                 Liberty Garden Rd Number 1 Malad West Mumbai Maharashtra 400064</p>
                        </div>
                    </div>

                </div>

                <div className='footer-contactus'>
                    <div>
                        <h3>join our Newsletter</h3>
                        <input className='footer-input' type='text' placeholder='Your Email Address..' />
                    </div>

                    <div className='footer-btn'>
                        <button type='submit'>Join Now</button>
                    </div>

                </div>

            </div>
            <div class="Copy-right">
                <p>© ADInitiative 2023  All Rights Reserved | Privacy Policy | Terms & Services</p>
                <p>Website design & development by S&A</p>
            </div>
        </div>
    )
}

export default Footer