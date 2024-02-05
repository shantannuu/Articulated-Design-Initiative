import React, { useState, useRef } from 'react'
import './Gallary.css'
function Gallary() {
    const [selectedRadio, setSelectedRadio] = useState('c1');

    const videoRefs = {
        c1: useRef(null),
        c2: useRef(null),
        c3: useRef(null),
    };

    const handleChange = (radioId) => {
        setSelectedRadio(radioId);
        playVideo(radioId);
    };

    const playVideo = (radioId) => {
        try {
            Object.keys(videoRefs).forEach((key) => {
                if (videoRefs[key].current) {
                    videoRefs[key].current.pause();
                }
            });

            // Play the selected video
            if (videoRefs[radioId].current) {
                videoRefs[radioId].current.play();
            }
        } catch (error) {
            console.log("error")
        }
        // Pause all videos

    };

    return (
        <div className='gallary-section'>
            <div className='gallary-h1'>
                <h1>Elegant Living: A Contemporary Oasis</h1>
                <p>Step into the lap of luxury with our latest video showcasing a breathtaking living area. Immerse yourself in modern design, chic decor, and a harmonious blend of comfort and style. Discover how we've crafted an environment that seamlessly combines functionality with aesthetic appeal.</p>
                <p>Walk through cozy corners, romantic decor, and personalized touches that create a haven for lovebirds. From subtle elegance to warm hues, this video captures the essence of creating a space that resonates with shared moments and cherished memories.</p>
                <p>From playful themes to functional design, witness the magic unfold as we take you through spaces designed to inspire and nurture the young minds. Join us on a journey where every corner sparks joy and fosters endless possibilities.</p>
                
                {/* <div className='web-info'>
                    <div>
                        <h3>10 +</h3>
                        <h3>Happy Customer</h3>
                    </div>
                    <div>
                        <h3>12 +</h3>
                        <h3>Elegant Projects</h3>
                    </div>
                    <div>
                        <h3>5 +</h3>
                        <h3>Years of Service</h3>
                    </div>
                </div> */}
            </div>

            <div className='project-gallary'>
                <input type='radio' name='slide' id='c1' checked={selectedRadio === 'c1'}
                    onChange={() => handleChange('c1')} />
                <label htmlFor='c1' className='gallary-card'>
                    <video muted loop ref={videoRefs.c1}>
                        <source src='https://res.cloudinary.com/dyhf9rqfz/video/upload/v1703526899/1703526702082928_ms6sur.mp4' />
                    </video>
                    <div className='gallary-row'>
                        <div className='gallary-icon'>1</div>
                        <div className='gallary-description'>
                            <h4>Winter</h4>
                            <p>winter has so much to offer</p>
                        </div>
                    </div>
                </label>
                <input type='radio' name='slide' id='c2' checked={selectedRadio === 'c2'}
                    onChange={() => handleChange('c2')} />
                <label htmlFor='c2' className='gallary-card'>
                    <video loop ref={videoRefs.c2}>
                        <source src='https://res.cloudinary.com/dyhf9rqfz/video/upload/v1703557115/1703556845806985_rf9mdr.mp4' />
                    </video>
                    <div className='gallary-row'>
                        <div className='gallary-icon'>2</div>
                        <div className='gallary-description'>
                            <h4>Winter</h4>
                            <p>winter has so much to offer</p>
                        </div>
                    </div>
                </label>
                <input type='radio' name='slide' id='c3' checked={selectedRadio === 'c3'}
                    onChange={() => handleChange('c3')} />
                <label htmlFor='c3' className='gallary-card'>
                    <video loop ref={videoRefs.c3}>
                        <source src='https://res.cloudinary.com/dyhf9rqfz/video/upload/v1703559158/1703558962536100_lzccrh.mp4' />
                    </video>
                    <div className='gallary-row'>
                        <div className='gallary-icon'>3</div>
                        <div className='gallary-description'>
                            <h4>Winter</h4>
                            <p>winter has so much to offer</p>
                        </div>
                    </div>
                </label>
            </div>

        </div>
    )
}

export default Gallary