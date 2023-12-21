import React, { useEffect,useState } from 'react'
import { useParams } from "react-router-dom"
import '../Pages/category.css'
import img1 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_7.jpg'
import img2 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_8.jpg'
import img3 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_5.jpg'
import img4 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_6.jpg'
import img5 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_4.jpg'
import img6 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_1.jpg'
import img7 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_11.jpg'
import img8 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_3.jpg'
import img9 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_9.jpg'
import img10 from '../Components/Assets/lanja-house-articulated-design-initiative-adi_10.jpg'
import img11 from '../Components/Assets/d1.jpg'
import img12 from '../Components/Assets/d2.jpg'
import img13 from '../Components/Assets/d3.jpg'
import img14 from '../Components/Assets/d4.jpg'
import img15 from '../Components/Assets/d5.jpg'
import img16 from '../Components/Assets/d6.jpg'
import Navbar from '../Components/Navbar/navbar'
import { getProjectById } from '../Apicalls/ProjectApi'
import { useDispatch } from 'react-redux'
import { showLoading,HideLoading, showLoadingWithDelay } from '../redux/loaderSlice'
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
                {/* <div className='Arch-Project-detail'>
                    <h1>Lanja House</h1>
                    <h3>1100 sq fit</h3>
                    <div className='Arch-Project-small-detail'>
                        <h3>Lanja, Ratnagiri, Maharashtra</h3>
                        <h3>21 Feb, 2021</h3>
                    </div>
                </div> */}

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
            {/* <div class="wide reveal">
                <div class="content">
                    <img src={img6} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            <h4>Structure</h4>
                            <p>The simplicity of the house is accentuated by the contemporary implementation of the traditional materials</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="tall reveal">
                <div class="content">
                    <img src={img7} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            <h4>Structure</h4>
                            <p>The exposed laterite finish sets a very natural backdrop, and being sustainably conscious</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="text-desc reveal">
                <h1>Structure</h1>
                <p>Built with a composite load-bearing construction technique on a laterite stone foundation, it helped reduce damage to the red fertile soil. The house capitalises on the indigenous materials locally available, and more importantly, utilises materials which are familiar to the inhabitants of the area and are best suited for the site’s extreme climate conditions.</p>
            </div> */}
            {/* <div class="medium reveal" >
                <div class="content">
                    <img src={img8} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            <h4>Structure</h4>
                            <p>not even a single tree on site was cut down or disturbed from its position</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="big reveal">
                <div class="content">
                    <img src={img9} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            <h4>Structure</h4>
                            <p>This architectural expression is carried throughout the interior detailing as well.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="medium reveal">
                <div class="content">
                    <img src={img10} alt="" />
                    <div class="hover-info">
                        <div class="inside-hover-info">
                            <h3>Lanja House</h3>
                            <h4>Structure</h4>
                            <p>A combination of locally sourced teak wood furniture, modern furnishing elements and curated artwork brings this house together.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="text-desc reveal">
                <h1>Structure</h1>
                <p>Laterite stone which is locally available within 10 km of the construction site has been predominantly used for walls. RCC beam has been incorporated for the lintel which supports the MS roof structure and the Mangalore tiles.</p>
            </div> */}
        </section>
          ))}     
                
                {/* <div className='project-drawings'>
                    <div className='project-drawings-content'>
                        <h3>Full House Structure</h3>
                        <p>Laterite stone which is locally available within 10 km of the construction site has been predominantly used for walls. RCC beam has been incorporated for the lintel which supports the MS roof structure and the Mangalore tiles.</p>
                    </div>
                    <div className='project-drawings-content-image' >
                        <img src={img11} />
                    </div>
                </div>
                <div className='project-drawings'>
                    <div className='project-drawings-content'>
                        <div>
                            <h3>Dining Room Area</h3>
                            <p>Laterite stone which is locally available within 10 km of the construction site has been predominantly used for walls. RCC beam has been incorporated for the lintel which supports the MS roof structure and the Mangalore tiles.</p>
                        </div>

                    </div>
                    <div className='project-drawings-content-image'>
                        <img src={img12} />
                    </div>
                </div> */}
            </div>
            <RecentWork/>
        </>
    )
}

export default Category