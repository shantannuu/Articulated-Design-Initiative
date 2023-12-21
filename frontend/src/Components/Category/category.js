import React, { useState, useRef, useEffect } from 'react'
import './category.css'
import Img1 from '../Assets/09.jpg'
import Img2 from '../Assets/08.jpg'
import Img3 from '../Assets/07.jpg'
function Category() {

    const trackRef = useRef(null);
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const handleMouseDown = (e) => {
        setMouseDownAt(e.clientX);
        trackRef.current.style.cursor = 'grabbing';
    };


    const handleMouseUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage);
        trackRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (mouseDownAt === 0) return;

        const mouseDelta = mouseDownAt - e.clientX;
        const maxDelta = window.innerWidth / 2;
        const nextPercentageUnconstrained = prevPercentage + (mouseDelta / maxDelta) * -100;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -21);

        setPercentage(nextPercentage);

        trackRef.current.animate({
            transform: `translate(${nextPercentage}%)`
        }, { duration: 1200, fill: "forwards" })


        for (const image of trackRef.current.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${50 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });

        }

    };

    const handlePrevSlideClick = () => {
        const nextPercentage = percentage + 21;
        setPercentage(Math.min(nextPercentage, 0));

        trackRef.current.animate({
            transform: `translate(${nextPercentage}%)`
        }, { duration: 1200, fill: "forwards" })

        const images = trackRef.current.getElementsByClassName("image");
        for (const image of images) {
            image.animate({
                objectPosition: `${50 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });

        }
    };

    // document.getElementById("prev-slide").addEventListener("click", handlePrevSlideClick);

    const handleNextSlideClick = () => {
        const nextPercentage = percentage - 21;
        setPercentage(Math.max(nextPercentage, -21));

        trackRef.current.animate({
            transform: `translate(${nextPercentage}%)`
        }, { duration: 1200, fill: "forwards" })

        const images = trackRef.current.getElementsByClassName("image");
        for (const image of images) {
            image.animate({
                objectPosition: `${50 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });

        }
    };

    // document.getElementById("next-slide").addEventListener("click", handleNextSlideClick);



    // useEffect(() => {
        

    //     document.getElementById("prev-slide").addEventListener("click", handlePrevSlideClick);
    //     document.getElementById("next-slide").addEventListener("click", handleNextSlideClick);
    //     // return () => {

    //     //     document.getElementById("prev-slide").removeEventListener("click", handlePrevSlideClick);
    //     //     document.getElementById("next-slide").removeEventListener("click", handleNextSlideClick);
    //     // };
    // }, [mouseDownAt, prevPercentage,percentage]);

    return (

        <div className="container-slider">
            <div
                ref={trackRef}
                id="image-track"
                data-percentage={percentage}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ cursor: 'gap' }}
            >
                <div className="slide">
                    <img className="image" src={Img1} alt="" draggable="false" />
                    <div className="slide-content">
                        <h1>Architecture</h1>
                        <p>10 Projects</p>
                    </div>

                </div>
                <div className="slide">
                    <img className="image" src={Img2} alt="" draggable="false" />
                    <div className="slide-content">
                        <h1>Interior Design</h1>
                        <p>12 Projects</p>
                    </div>
                </div>
                <div className="slide">
                    <img className="image" src={Img3} alt="" draggable="false" />
                    <div className="slide-content">
                        <h1>Urban Planning and Landscape</h1>
                        <p>8 Projects</p>
                    </div>
                </div>
                <div className="slide">
                    <img className="image" src={Img1} alt="" draggable="false" />
                    <div className="slide-content">
                        <h1>Product Designing</h1>
                        <p>2 Projects</p>
                    </div>
                </div>
                <div className="slide">
                    <img className="image" src={Img3} alt="" draggable="false" />
                    <div className="slide-content">
                        <h1>All</h1>
                        <p>32 Projects</p>
                    </div>
                </div>







            </div>
            {/* <div className="content-header-slider">
                <div className="slider-header">
                    <h1>Services</h1>
                </div>
                <div className="arrow-btn">
                    <div className="left">
                        <button id="prev-slide"><svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"
                            viewBox="0 0 96 96" id="arrow">
                            <switch>
                                <g>
                                    <path
                                        d="M83.999 43.999H21.656l21.172-21.172a4.001 4.001 0 0 0-5.657-5.657l-28 28a4 4 0 0 0-.001 5.656l28 28a3.989 3.989 0 0 0 2.829 1.172 3.999 3.999 0 0 0 2.829-6.828L21.655 51.999h62.344a4 4 0 0 0 0-8z">
                                    </path>
                                </g>
                            </switch>
                        </svg></button>
                    </div>
                    <div className="right">
                        <button id="next-slide"><svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"
                            viewBox="0 0 96 96" id="arrow">
                            <switch>
                                <g>
                                    <path
                                        d="M12 52h62.344L53.172 73.172a4 4 0 1 0 5.657 5.656l28-28a4 4 0 0 0 0-5.656l-28-28A3.989 3.989 0 0 0 56 16a4 4 0 0 0-2.828 6.828L74.344 44H12a4 4 0 0 0 0 8z">
                                    </path>
                                </g>
                            </switch>
                        </svg></button>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default Category