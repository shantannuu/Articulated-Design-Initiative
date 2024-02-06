import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import '../Pages/category.css'
import { getProjectById } from '../Apicalls/ProjectApi'
import { useDispatch } from 'react-redux'
import { showLoadingWithDelay } from '../redux/loaderSlice'
import RecentWork from '../Components/RecentWork/RecentWork'
import CustomModal from '../Components/Modal/Modal';
function Category() {
    const [projectData, setProjectData] = useState(null)
    const { id } = useParams();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        if (screenWidth > 530) {
            console.log("open")
            setModalIsOpen(true);
            setSelectedImage(image);
        }

    };

    const closeModal = () => {
        console.log("close")
        setModalIsOpen(false);
    };

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

    useEffect(() => {
        getProjectDetail();
        window.scrollTo(0, 0);
    }, [id])
    return (
        projectData && projectData.details.length > 0 ? (
            <>

                <div className='All-project-deatils'>

                    {projectData.details.map((obj, index) => (
                        <section class="section-1">

                            <div class="wide reveal" onClick={() => openModal(obj.wideImage.image)}>
                                <div class="content">
                                    <img src={obj.wideImage.image} alt="" />

                                    {/* <div class="hover-info">
                                        <div class="inside-hover-info">
                                            <h3>Lanjaa House</h3>
                                            <h4>Structure</h4>
                                            <p>{obj.wideImage.description}</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div class="tall reveal" onClick={() => openModal(obj.tallImage.image)}>
                                <div class="content">
                                    <img src={obj.tallImage.image} alt="" />
                                    {/* <div class="hover-info">
                                        <div class="inside-hover-info">
                                            <h3>Lanja House</h3>
                                            <h4>Structure</h4>
                                            <p>{obj.tallImage.description}</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className={ index === 0 ? "text-desc reveal" : "text-desc text-desc-3 reveal" } >
                                {index === 0 ? <>
                                    <div className='first-element'>
                                        <h1>{projectData.title}</h1>
                                        <h3>Location : {projectData.location}</h3>
                                        <h3>Area : {projectData.area}</h3>
                                        <h3>Completion : {projectData.publishDate.split('T')[0]}</h3>
                                    </div></> : <></>}
                                <p>{obj.detailDescription1}</p>
                                {index === 0 ? <><div className='second-element'>
                                    <h3>{projectData.photography === '' ? '' : `Photography by ${projectData.photography}`}</h3>

                                </div></> : <></>}



                            </div>
                            <div class="medium reveal" onClick={() => openModal(obj.mediumImage1.image)}>
                                <div class="content">
                                    <img src={obj.mediumImage1.image} alt="" />
                                    {/* <div class="hover-info">
                                        <div class="inside-hover-info">
                                            <h3>Lanja House</h3>
                                            <h4>Structure</h4>
                                            <p>{obj.mediumImage1.description}</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div class="big reveal" onClick={() => openModal(obj.largeImage.image)}>
                                <div class="content">
                                    <img src={obj.largeImage.image} alt="" />
                                    {/* <div class="hover-info">
                                        <div class="inside-hover-info">
                                            <h3>Lanja House</h3>
                                            <h4>Structure</h4>
                                            <p>{obj.largeImage.description}</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div class="medium reveal" onClick={() => openModal(obj.mediumImage2.image)}>
                                <div class="content">
                                    <img src={obj.mediumImage2.image} alt="" />
                                    {/* <div class="hover-info">
                                        <div class="inside-hover-info">
                                            <h3>Lanja House</h3>
                                            <h4>Structure</h4>
                                            <p>{obj.mediumImage2.description}</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div class="text-desc text-desc-3 reveal">
                                <p>{obj.detailDescription2}</p>
                            </div>

                        </section>
                    ))}


                </div>
                <RecentWork />
                <CustomModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={selectedImage} />
            </>
        ) : (
            <div className='No-project-deatils'><p>No project available</p></div>
        )
    )
}

export default Category