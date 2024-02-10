import React, { useRef,useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './News.css'
import { Autoplay,Navigation } from 'swiper/modules';

import { useDispatch } from 'react-redux';
import { showLoadingWithDelay } from '../../redux/loaderSlice';
import { GetAllMedias } from '../../Apicalls/MediaApi';
import { getProjectById } from '../../Apicalls/ProjectApi';
function News() {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();

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

    useEffect(() => {
        getMedias();
    }, []);

    return (
        <div className='new2-section'>
            <h1 className='new2-section-header'>What's New ?</h1>
            <h3 className='new2-section-header-h3'>Recently Published</h3>
            <Swiper autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} navigation={true} modules={[Autoplay,Navigation]} className="mySwiper">
          {data.map((newData1) =>  (<SwiperSlide>
                <div className='new2-container'>
                        <div className='new2-image'>
                            <img className='no-interaction' src={newData1.mediaImage} />
                        </div>
                        <div className='new2-content'>
                            <div className='new2-header'>
                                <h1>{newData1.title}</h1>
                                <h3>{newData1.projectName}</h3>
                            </div>
                            <div className='new2-footer'>
                                <h3><a target="_blank" rel="noopener noreferrer" href={newData1.link}>Know More</a></h3>
                                <h3>{newData1.publishDate.split('T')[0]}</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>))}
                
            </Swiper>

        </div>
    )
}

export default News