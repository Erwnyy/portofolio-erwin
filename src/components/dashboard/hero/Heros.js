import React from 'react'
import './heros.css'

const Heros = () => {
  return (
    <div>
        <section className='section-hero'>
          <div id='home' className='container hero-container'>
            <div className='logos'>
              <img src="/props/background.png" className='background_hero'/>
              <img src="/props/yuhu.png" className='hero_img'/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Heros