import React, { useState } from 'react'
import Award from './Awards/Award';
import Blog from './Blog/Blog';
import Review from './Reviews/Review';
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
                    <button onClick={() => handleTabClick('section1')} className={activeTab === 'section1' ? 'active' : ''}>Awards</button>
                    <button onClick={() => handleTabClick('section2')} className={activeTab === 'section2' ? 'active' : ''}>Blogs</button>
                    <button onClick={() => handleTabClick('section3')} className={activeTab === 'section3' ? 'active' : ''}>Reviews</button>
                </div>

                <div className="section-container">
                    {activeTab === 'section1' && <Award />}
                    {activeTab === 'section2' && <Blog />}
                    {activeTab === 'section3' && <Review />}
                </div>
            </div>

        </div>
    )
}

export default News