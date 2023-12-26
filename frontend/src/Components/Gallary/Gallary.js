import React, { useState,useRef } from 'react'
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
        try{
            Object.keys(videoRefs).forEach((key) => {
                if (videoRefs[key].current) {
                    videoRefs[key].current.pause();
                }
            });
    
            // Play the selected video
            if (videoRefs[radioId].current) {
                videoRefs[radioId].current.play();
            }
        }catch(error){
            console.log("error")
        }
        // Pause all videos
        
    };

    return (
        <div className='gallary-section'>
            <div className='gallary-h1'>
                <h1>Elevate Your Perspective: Architectural Wonders Unveiled in Stunning Videos</h1>
                <p>Embark on a visual odyssey with our exclusive architectural video showcase. Behold the grandeur of iconic structures, witness the evolution of design, and delve into the narratives behind each masterpiece. Immerse yourself in the fusion of creativity and engineering that defines our built landscape. Whether you're a design enthusiast or simply curious about the world around you, our curated videos promise to inspire, educate, and evoke a profound appreciation for the art of architecture. Welcome to a visual journey where every frame tells a story of innovation and elegance.</p>
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