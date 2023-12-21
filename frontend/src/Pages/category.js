import React, { useEffect,useState } from 'react'
import { useParams } from "react-router-dom"
import '../Pages/category.css'
import { getProjectById } from '../Apicalls/ProjectApi'
import { useDispatch } from 'react-redux'
import { showLoadingWithDelay } from '../redux/loaderSlice'
import RecentWork from '../Components/RecentWork/RecentWork'
function Category() {
    const [projectData, setProjectData] = useState(null)
    const { id } = useParams();

    const dispatch = useDispatch();
    const getProjectDetail = async () => {
        try {
            dispatch(showLoadingWithDelay(2000));
            const response = await getProjectById(id);
            dispatch(showLoadingWithDelay(2000));

            
            if (response.success) {
                setProjectData(response.data);
            } else {
                console.log(response.message)
            }
        } catch (error) {
            dispatch(showLoadingWithDelay(2000));

            console.log(error.message);
        }
    }

    useEffect(()=>{
        getProjectDetail();
        window.scrollTo(0, 0);
    },[])
    return (
        projectData &&
        <>
       
            <div className='All-project-deatils'>
                
          {projectData.details.map(obj =>(
            <section class="section-1">

            <div class="wide reveal">
                <div class="content">
                    <img src={obj.wideImage.image} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            {/* <h4>Structure</h4> */}
                            <p>{obj.wideImage.description}</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="tall reveal">
                <div class="content">
                    <img src={obj.tallImage.image} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            {/* <h4>Structure</h4> */}
                            <p>{obj.tallImage.description}</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-desc reveal">
                {/* <h1>Structure</h1> */}
                <p>{obj.detailDescription1}</p>
                
            </div>
            <div class="medium reveal">
                <div class="content">
                    <img src={obj.mediumImage1.image} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            {/* <h4>Structure</h4> */}
                            <p>{obj.mediumImage1.description}</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="big reveal">
                <div class="content">
                    <img src={obj.largeImage.image} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            {/* <h4>Structure</h4> */}
                            <p>{obj.largeImage.description}</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="medium reveal">
                <div class="content">
                    <img src={obj.mediumImage2.image} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            {/* <h4>Structure</h4> */}
                            <p>{obj.mediumImage2.description}</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-desc reveal">
                {/* <h1>Structure</h1> */}
                <p>{obj.detailDescription2}</p>
            </div>
            
        </section>
          ))}     
                
                
            </div>
            <RecentWork/>
        </>
    )
}

export default Category