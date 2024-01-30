import React from 'react'
import './Blog.css'
import BannerImg1 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/A1.jpg'
import BannerImg2 from 'C:/Users/perfefect/Documents/articulated-design-initiative/frontend/src/Components/Assets/blog.jpg'
function Blog({ activeSection }) {
  return (
    <div className='blog-section'>
      <h1 className='blog-section-header'>Media</h1>
        {activeSection === 'section1' && <div className='blog-card'>
          <div className='blog-card-img'>
            <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575731/Articulated-Design-Initiative/media/t2hnpoprikmnsqbcl2bl.png" />
          </div>
          <div className='blog-card-content'>
            <div className='blog-card-content-header'>

              <h1>Good Home Magazine India</h1>
              <h3>Celebrating year end with our special project ‘Lanja house’ featuring with the publications. Thank you</h3>
              <p>Time stands still here at Lanja. A visual respite from modern and a worthy homage to traditional architecture, this bungalow is the very definition of slow living!

                Nestled amidst the serene landscapes of Lanja, on the outskirts of Ratnagiri, this residence is reminiscent of an ancestral haven seamlessly embedded within the unadulterated landscapes of this rural farmland. Spread across 1,100sqft, this home is grounded and designed to evoke nostalgia while colluding with sustainable design practices. Aditya Baskar of Articulated Design Initiative meticulously conceived a design road map that adheres to a budget-friendly framework. Raised above the ground, the dwelling offers physical elevation and a visual canvas that frames the lush foliage, creating an idyllic retreat.

                On the built of this home, Aditya elaborates, "We ingeniously utilised a composite load-bearing construction technique on a laterite stone foundation. The dwelling is a model of sustainability, safeguarding the fertile soil and embracing the area's indigenous resources. With walls predominantly constructed from locally sourced laterite stone, the house finds an equilibrium between traditional aesthetics and modern sensibilities."

                The interior mirrors this harmony, with a well-lit, expansive living area accentuated by clearstory windows inviting abundant morning sunlight. The design prioritizes cross-ventilation, further enhancing the perception of space. The interior's minimalistic elegance showcases the innate beauty of exposed laterite finishes, while a commitment to sustainability is evident in the preservation of every on-site tree.

                An artful fusion of locally sourced teak wood furniture, contemporary elements, and curated artwork epitomises the design narrative. Seamlessly blending nostalgia with modern living, this dwelling exemplifies how architecture can be a tribute to heritage while embracing the future.</p>


            </div>
            <div className='blog-card-content-footer'>
              <a href='https://www.instagram.com/p/CxPbORKJ2hX/?utm_source=ig_web_copy_link'>see our instagram post</a>
              <h3>3.12.23</h3>
            </div>
          </div>
        </div>}
        {activeSection === 'section2' && <div className='blog-card'>
          <div className='blog-card-img'>
            <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575723/Articulated-Design-Initiative/media/pv7p6cixddaebbea8dpd.png" />
          </div>
          <div className='blog-card-content'>
            <div className='blog-card-content-header'>

              <h1>Arch Daily</h1>
              <h3>Thank you</h3>
              <p></p>


            </div>
            <div className='blog-card-content-footer'>
              <a href='https://www.archdaily.com/1007001/lanja-house-articulated-design-initiative-adi'>see entire Article</a>
              <h3>3.12.23</h3>
            </div>
          </div>
        </div>}
        {activeSection === 'section3' && <div className='blog-card'>
          <div className='blog-card-img'>
            <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703575728/Articulated-Design-Initiative/media/pihzyufclfni8o3yjucw.png" />
          </div>
          <div className='blog-card-content'>
            <div className='blog-card-content-header'>

              <h1>architectural Digest</h1>
              <h3>Words: Ashna Lulla</h3>
              <p>Located in the picturesque coastal town of Lanja, Ratnagiri, Maharashtra, lies a beautiful home that embodies simple living whilst blending with its natural surroundings. Inspired by the bucolic, raw spirit of the farmlands, Mumbai-based architectural practice Articulated Design Initiative (@adinitiative.in) has designed a home for a couple seeking to reconnect with their roots.

                Situated on a site spanning 6,500 square feet, the house is strategically positioned along the east-west axis. The western side seeps into the contours of the hillside—dense bamboo, neem, banana, and cashew trees buffer the home from heavy traffic along the highway. On the eastern side, the bungalow offers sweeping views of the lush rice farmland. Principal architect Aditya Basarkar (@adityabasarkar) has managed to capture the quality of the rural setting with minimal impact on the land.

                At the core of the design, concept was sustainable living and construction. The bungalow was built with a composite load-bearing construction technique that uses a laterite stone foundation minimising damage to the fertile red soil native to the region. The home balances natural light, sloped Mangalore-tiled roofs, exposed laterite walls, and rough kota stone flooring drawing on a palette of indigenous materials.</p>


            </div>
            <div className='blog-card-content-footer'>
              <a href='https://www.architecturaldigest.in/story/this-1100-square-foot-maharashtra-home-embraces-simple-living-in-a-coastal-town/?utm_source=instagram&utm_medium=social&utm_brand=ad-in&utm_social-type=owned'>see entire Article</a>
              <h3>3.12.23</h3>
            </div>
          </div>
        </div>}
        {activeSection === 'section4' && <div className='blog-card-kohlar'>
          <div className='image-blog-1'>
            <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703161615/Articulated-Design-Initiative/Awards/zr1yvep8uxqcsexs0dhx.jpg" />
            <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703589343/Articulated-Design-Initiative/media/hzcg8g5u0i6c5ztmtjss.jpg" />
            <div className='blog-card-content-footer'>
              <a href='https://www.architecturaldigest.in/story/this-1100-square-foot-maharashtra-home-embraces-simple-living-in-a-coastal-town/?utm_source=instagram&utm_medium=social&utm_brand=ad-in&utm_social-type=owned'>see entire Article</a>
              <h3>3.12.23</h3>
            </div>
          </div>
          <div className='image-blog-2'>
            

              <img src="https://res.cloudinary.com/dyhf9rqfz/image/upload/v1703589333/Articulated-Design-Initiative/media/mgpydgwrddufd79yrdns.jpg" />



          
            
          </div>
          
        </div>}
      </div>

  )
}

export default Blog