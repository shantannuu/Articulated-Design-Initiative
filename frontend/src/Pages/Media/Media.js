import React, { useEffect, useState } from 'react'

import './Media.css'
function Media() {
    const [activeTab, setActiveTab] = useState('section1');

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='mediaPage'>
            <div className='media-main-Page-Header'>

                Recent Posts
            </div>
            <div className='news-tab-section-container'>
                {screenWidth > 530 && <div className="tab-btn-container">
                    <div className='tab-btn-header'>
                        <h3>Popular News</h3>
                    </div>
                    <button

                        onClick={() => handleTabClick('section1')} className={activeTab === 'section1' ? 'active' : ''}>
                        All
                    </button>
                    <button

                        onClick={() => handleTabClick('section2')} className={activeTab === 'section1' ? 'active' : ''}>
                        KOHLER Bold Design Award
                    </button>
                    <button

                        onClick={() => handleTabClick('section3')} className={activeTab === 'section2' ? 'active' : ''}>
                        Architecture Digest</button>
                    <button

                        onClick={() => handleTabClick('section4')} className={activeTab === 'section3' ? 'active' : ''}>
                        Arch Daily</button>
                    <button

                        onClick={() => handleTabClick('section5')} className={activeTab === 'section4' ? 'active' : ''}>

                        Good Homes India
                    </button>
                </div>}

                <div className="section-container">
                    {activeTab === 'section1' && <>
                        <div className='award-section'>
                            {screenWidth > 530 && <h1 className='award-section-header'>Articles</h1>}
                            <div className='award-section-card-grid'>
                                <div className='award-card' >
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1707128588/Articulated-Design-Initiative/media/nice_w3b12d.jpg" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>21.09.2022</h3>
                                        <h1>Lanja House</h1>
                                        <div className='award-card-link'>
                                            <h3>Building of the year 2024 Nominee</h3>
                                            <h3>know more</h3>
                                        </div>

                                    </div>
                                </div>
                                <div className='award-card' >
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1706539532/Articulated-Design-Initiative/media/kbda-logo-nodate_rpaku0.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>21.09.2022</h3>
                                        <h1>Lanja House</h1>
                                        <div className='award-card-link'>
                                            <h3>KOHLER Bold Design Award</h3>
                                            <h3>know more</h3>
                                        </div>

                                    </div>
                                </div>
                                <div className='award-card'>
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575731/Articulated-Design-Initiative/media/t2hnpoprikmnsqbcl2bl.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>13.09.2022</h3>
                                        <h1>Breezy House</h1>
                                        <div className='award-card-link'>
                                            <h3>Good Homes Magzine</h3>
                                            <h3>know more</h3>
                                        </div>

                                    </div>
                                </div>
                                <div className='award-card'>
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575723/Articulated-Design-Initiative/media/pv7p6cixddaebbea8dpd.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>18.09.2023</h3>
                                        <h1>Lanja House</h1>
                                        <div className='award-card-link'>
                                            <h3>Arch Daily</h3>
                                            <h3>know more</h3>
                                        </div>
                                    </div>
                                </div>
                                <a href='https://www.architecturaldigest.in/story/this-1100-square-foot-maharashtra-home-embraces-simple-living-in-a-coastal-town/' target="_blank" rel="noopener noreferrer" className='award-card'>
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575728/Articulated-Design-Initiative/media/pihzyufclfni8o3yjucw.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>20.06.2022</h3>
                                        <h1>Lanja House</h1>
                                        <div className='award-card-link'>
                                            <h3>Architectural Digest</h3>
                                            <h3>know More</h3>
                                        </div>
                                    </div>
                                </a>
                                <div className='award-card'>
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575728/Articulated-Design-Initiative/media/pihzyufclfni8o3yjucw.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>18.01.2024</h3>
                                        <h1>House Of Flamboyance</h1>
                                        <div className='award-card-link'>
                                            <h3>Architectural Digest</h3>
                                            <h3>know more</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                    {activeTab === 'section2' && <>
                        <div className='award-section'>
                            <h1 className='award-section-header'>Awards</h1>
                            <div className='award-section-card-grid'>
                                <div className='award-card' >
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1706539532/Articulated-Design-Initiative/media/kbda-logo-nodate_rpaku0.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>2023</h3>
                                        {/* <h1>Wooden Imperial</h1> */}
                                        <h3>KOHLER Bold Design Award</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                    {activeTab === 'section3' && <>
                        <div className='award-section'>
                            <h1 className='award-section-header'>Awards</h1>
                            <div className='award-section-card-grid'>
                                <div className='award-card'>
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575723/Articulated-Design-Initiative/media/pv7p6cixddaebbea8dpd.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>2023</h3>
                                        {/* <h1>Head Board</h1> */}
                                        <h3>Arch Daily</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                    {activeTab === 'section4' && <>
                        <div className='award-section'>
                            <h1 className='award-section-header'>Awards</h1>
                            <div className='award-section-card-grid'>
                                <div className='award-card'>
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575728/Articulated-Design-Initiative/media/pihzyufclfni8o3yjucw.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>2023</h3>
                                        {/* <h1>Head Board</h1> */}
                                        <h3>Architectural Digest</h3>
                                    </div>
                                </div>
                                <div className='award-card'>
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575728/Articulated-Design-Initiative/media/pihzyufclfni8o3yjucw.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>18.01.2024</h3>
                                        <h1>House Of Flamboyance</h1>
                                        <div className='award-card-link'>
                                            <h3>Architectural Digest</h3>
                                            <h3>know more</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                    {activeTab === 'section5' && <>
                        <div className='award-section'>
                            <h1 className='award-section-header'>Awards</h1>
                            <div className='award-section-card-grid'>
                                <div className='award-card'>
                                    <div className='award-card-img'>
                                        <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575731/Articulated-Design-Initiative/media/t2hnpoprikmnsqbcl2bl.png" />
                                    </div>
                                    <div className='award-card-content'>
                                        <h3>2023</h3>
                                        {/* <h1>Head Board</h1> */}
                                        <h3>Good Homes Magzine</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
        </div>
    )
}

export default Media