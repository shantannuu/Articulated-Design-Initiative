import React, { useEffect, useState } from 'react'
import './RecentWork.css'
import { GetAllProjects, getCategoryById } from '../../Apicalls/ProjectApi';
import { useDispatch } from 'react-redux';
import { showLoadingWithDelay } from '../../redux/loaderSlice';
import { Link, Redirect, useNavigate } from 'react-router-dom';


const recentWorkData = [
  {
    "title": "Red Brick House",
    "category": "Architecture",
    "short_description": "After almost 25 years, the master actor steps behind the camera",
    "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702609086/ADI/ADI--3/ugplf8q4xmumnoay0i4z.jpg"
  },
  {
    "title": "Coral Beauty",
    "category": "Interior",
    "short_description": "The Danish arts writer finding clarity between the lines.",
    "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702609071/ADI/ADI--3/fmvqik9r7c14r0usq8qk.jpg",
  },
  {
    "title": "Kitchen",
    "category": "Product Design",
    "short_description": "The pop star reflects on the big feelings behind her biggest hits.",
    "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608967/ADI/ADI--1/rptb3jv7q9mdq5knuzkk.jpg"
  },
  {
    "title": "Wooden Imperial",
    "category": "Interior",
    "short_description": "Inside the moody, mysterious world of Sweden’s preeminent painter.",
    "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608998/ADI/ADI--2/gmtqkis3oj5kflehczvl.jpg"
  },
  {
    "title": "Head Board",
    "category": "Interior",
    "short_description": "Crude, contrary—and killing it: Meet the auteur of awkwardness.",
    "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608999/ADI/ADI--2/s9ehvtrswl1d5dwmtkjg.jpg"
  },
  {
    "title": "Head Board",
    "category": "Interior",
    "short_description": "Crude, contrary—and killing it: Meet the auteur of awkwardness.",
    "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608999/ADI/ADI--2/s9ehvtrswl1d5dwmtkjg.jpg"
  },
  {
    "title": "Head Board",
    "category": "Interior",
    "short_description": "Crude, contrary—and killing it: Meet the auteur of awkwardness.",
    "image": "https://res.cloudinary.com/dyhf9rqfz/image/upload/v1702608999/ADI/ADI--2/s9ehvtrswl1d5dwmtkjg.jpg"
  }
]





function RecentWork() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  function truncateText(text, maxWords) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    const truncatedText = truncatedWords.join(' ');
    return truncatedText;
  }

  const getProjects = async () => {
    try {
      dispatch(showLoadingWithDelay(2000));
      const response = await GetAllProjects();
      dispatch(showLoadingWithDelay(2000));
      if (response.success) {
        const categoryIds = response.data.map(project => project.category);
        const categoryNames = await fetchCategoryNames(categoryIds);

        // Update project data with category names
        const projectsWithData = response.data.map((project, index) => ({
          ...project,
          categoryName: categoryNames[index],
        }));
        console.log(projectsWithData)
        setData(projectsWithData);
      } else {
        console.log(response.message)
      }
    } catch (error) {
      dispatch(showLoadingWithDelay(2000));
      console.log(error.message);
    }
  }


  const fetchCategoryNames = async (categoryIds) => {
    const promises = categoryIds.map(async (categoryId) => {
      const response = await getCategoryById(categoryId);  // Adjust this based on your actual API
      return response.success ? response.data.name : null;
    });

    return Promise.all(promises);
  }



  useEffect(() => {
    getProjects();
  }, []);


  return (
    <div className='recent-work'>
      <h1 className='recent-work-header'>Recent Works</h1>
      <div className='work-card-grid'>
        {data.map((newData, index) =>

        (
          index < 5 && (<div className='work-card'  onClick={() => Navigate(`/Project/${newData._id}`)}>
            <div className='work-card-img'>
              <img src={newData.projectImage} />
            </div>
            <div className='work-card-content'>
              <h3>{newData.categoryName}</h3>
              <h1>{newData.title}</h1>
              <h3>{newData.shortDescription === "" ? '' : `${truncateText(newData.shortDescription, 20)}...`}</h3>

            </div>
          </div>)))}
      </div>
    </div>
  )
}

export default RecentWork