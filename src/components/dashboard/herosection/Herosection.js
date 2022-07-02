import React from 'react'
import { BsMouse } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './herosection.css'

const Herosection = () => {
  return (
    <section className='section-hero'>
          <div id='home' className='container home-container'>
            <div className='logo'>
              <div className='hover-show'>
                <span className='circle'></span>
              </div>

              <img src="/props/background.png" className='backdrop_herosection'/>
              <img src="/props/yuhu.png" className='herosection_img'/>
              

            </div>


            {/* <a href='#footer' className='scroll-down'>
              <hr />
              <h5>scroll down</h5>
              <BsMouse className='scroll' />
              <hr />
            </a> */}

            <hr/>
            
        </div>
      </section>
  )
}

export default Herosection