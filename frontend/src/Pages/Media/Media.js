import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoadingWithDelay } from '../../redux/loaderSlice';

import './Media.css'
import { GetAllMedias } from '../../Apicalls/MediaApi';
import { getProjectById } from '../../Apicalls/ProjectApi';

function Media() {
    const [activeTab, setActiveTab] = useState('section');

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const getMedias = async () => {
        try {
            dispatch(showLoadingWithDelay(2000));
            const response = await GetAllMedias();
            dispatch(showLoadingWithDelay(2000));
            if (response.success) {
                const mediaIds = response.data.map(media => media.projectName);
                const mediaNames = await fetchProjectNames(mediaIds);

                // Update project data with category names
                const mediasWithData = response.data.map((media, index) => ({
                    ...media,
                    projectName: mediaNames[index],
                }));

                console.log(mediasWithData)
                setData(mediasWithData);
                console.log(data[0].title)
            } else {
                console.log(response.message)
            }
        } catch (error) {
            dispatch(showLoadingWithDelay(2000));
            console.log(error.message);
        }
    }

    const fetchProjectNames = async (mediaIds) => {
        const promises = mediaIds.map(async (mediaId) => {
            const response = await getProjectById(mediaId);
            return response.success ? response.data.title : null;
        });

        return Promise.all(promises);
    }

    function removeDuplicates(arr, prop) {
        const uniqueObjects = [];
        const uniqueTitles = new Set();
      
        for (const obj of arr) {
          if (!uniqueTitles.has(obj[prop])) {
            uniqueTitles.add(obj[prop]);
            uniqueObjects.push(obj);
          }
        }
      
        return uniqueObjects;
      }

      const newArray = removeDuplicates(data, 'title');

    useEffect(() => {
        window.scrollTo(0, 0);
        getMedias();
    }, []);


    return (
        <div className='mediaPage'>
            <div className='media-main-Page-Header'>

                Recently Published
            </div>
            <div className='news-tab-section-container'>
                {screenWidth > 530 && <div className="tab-btn-container">
                    <div className='tab-btn-header'>
                        <h3>Popular News</h3>
                    </div>
                    <button

                        onClick={() => handleTabClick('section')} className={activeTab === 'section' ? 'active' : ''}>
                        All Articles
                    </button>
                    {newArray.map((newData, index) => (<button

                        onClick={() => handleTabClick(`section${index + 1}`)} className={activeTab === `section${index + 1}` ? 'active' : ''}>
                        {newData.title}
                    </button>))
                    }

                </div>}

                <div className="section-container">
                    {activeTab === 'section' &&

                        <div className='award-section'>
                            {screenWidth > 530 && <h1 className='award-section-header'>Articles</h1>}
                            <div className='award-section-card-grid'>
                                {data.map((newData) => (
                                    <a target={newData.link === '' ? '' : "_blank"} rel={newData.link === '' ? '' : "noopener noreferrer"} href={newData.link} className='award-card' >
                                        <div className='award-card-img'>
                                            <img src={newData.mediaImage} />
                                        </div>
                                        <div className='award-card-content'>
                                            <h3>{newData.publishDate.split('T')[0]}</h3>
                                            <h1>{newData.projectName}</h1>
                                            <div className='award-card-link'>
                                                <h3>{newData.title}</h3>
                                                <h3>know more</h3>
                                            </div>

                                        </div>
                                    </a>

                                ))
                                }
                            </div>
                        </div>
                    }
                    {newArray.map((newData, index) => (
                        activeTab === `section${index + 1}` && <>
                            <div className='award-section'>
                                <h1 className='award-section-header'>{newData.title}</h1>
                                <div className='award-section-card-grid'>
                                    {data.map((newData1) => newData.title === newData1.title ? (
                                        <a target="_blank" rel="noopener noreferrer" href={newData.link} className='award-card' >
                                            <div className='award-card-img'>
                                                <img className='no-interaction' src={newData1.mediaImage} />
                                            </div>
                                            <div className='award-card-content'>
                                                <h3>{newData1.publishDate.split('T')[0]}</h3>
                                                <h1>{newData1.projectName}</h1>
                                                <div className='award-card-link'>
                                                    <h3>{newData1.title}</h3>
                                                    <h3>know more</h3>
                                                </div>
                                            </div>
                                        </a>) : <></>)}
                                </div>
                            </div>
                        </>

                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Media