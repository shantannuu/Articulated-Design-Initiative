import React, { useState } from 'react'
import Blog from './Blog/Blog';
import './News.css'
function News() {

    const [activeTab, setActiveTab] = useState('section1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='news-tab-section'>
            <div className='news-tab-section-header'>
                <h3>Recent Posts</h3>
                <h1>What's New ?</h1>
            </div>
            <div className='news-tab-section-container'>
                <div className="tab-btn-container">
                    <div className='tab-btn-header'>
                        <h3>Popular News</h3>
                    </div>
                    <button

                        onClick={() => handleTabClick('section1')} className={activeTab === 'section1' ? 'active' : ''}>
                        <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575731/Articulated-Design-Initiative/media/t2hnpoprikmnsqbcl2bl.png' />
                        Good Homes India
                    </button>
                    <button

                        onClick={() => handleTabClick('section2')} className={activeTab === 'section2' ? 'active' : ''}>
                        <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575728/Articulated-Design-Initiative/media/pihzyufclfni8o3yjucw.png' />
                        architecture Digest</button>
                    <button

                        onClick={() => handleTabClick('section3')} className={activeTab === 'section3' ? 'active' : ''}>
                        <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575723/Articulated-Design-Initiative/media/pv7p6cixddaebbea8dpd.png' />
                        Arch Daily</button>
                    <button

                        onClick={() => handleTabClick('section4')} className={activeTab === 'section4' ? 'active' : ''}>
                        <img src='https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703161615/Articulated-Design-Initiative/Awards/zr1yvep8uxqcsexs0dhx.jpg' />
                        Good Homes India
                    </button>
                </div>

                <div className="section-container">
                    {activeTab === 'section1' && <Blog activeSection="section1" />}
                    {activeTab === 'section2' && <Blog activeSection="section3" />}
                    {activeTab === 'section3' && <Blog activeSection="section2" />}
                    {activeTab === 'section4' && <Blog activeSection="section4" />}
                </div>
            </div>

        </div>
    )
}

export default News