import React from 'react'
import './Blog.css'
import BannerImg1 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A1.jpg'
import BannerImg2 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/blog.jpg'
function Blog() {
  return (
    <div className='blog-section'>
      <h1 className='blog-section-header'>Blogs</h1>
      <div className='blog-section-card-grid'>
        <div className='blog-card'>
          <div className='blog-card-img'>
            <img src={BannerImg2} />
          </div>
          <div className='blog-card-content'>
            <div className='blog-card-content-header'>
              <h1>5 Principles Of Effective Web Design</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            <div className='blog-card-content-footer'>
              <h3>Floor Plans</h3>
              <h3>3.12.23</h3>
            </div>
          </div>
        </div>
        <div className='blog-card'>
          <div className='blog-card-img'>
            <img src={BannerImg2} />
          </div>
          <div className='blog-card-content'>
            <div className='blog-card-content-header'>
              <h1>5 Principles Of Effective Web Design</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            <div className='blog-card-content-footer'>
              <h3>Floor Plans</h3>
              <h3>3.12.23</h3>
            </div>
          </div>
        </div>
        <div className='blog-card'>
          <div className='blog-card-img'>
            <img src={BannerImg2} />
          </div>
          <div className='blog-card-content'>
            <div className='blog-card-content-header'>
              <h1>5 Principles Of Effective Web Design</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            <div className='blog-card-content-footer'>
              <h3>Floor Plans</h3>
              <h3>3.12.23</h3>
            </div>
          </div>
        </div>
        <div className='blog-card'>
          <div className='blog-card-img'>
            <img src={BannerImg2} />
          </div>
          <div className='blog-card-content'>
            <div className='blog-card-content-header'>
              <h1>5 Principles Of Effective Web Design</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            <div className='blog-card-content-footer'>
              <h3>Floor Plans</h3>
              <h3>3.12.23</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog