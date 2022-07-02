import React from 'react'
import { Link } from 'react-router-dom'
import "../featured/featured.css"


//React icon
import { FaArrowRight } from 'react-icons/fa'


const Featured = () => {
  return (
        <>
                <section className='featured section' id='featured'>
                    <h2 className='section_title'>PORTOFOLIO</h2>
                    
                    <div className='featured_container'>
                        <article className='sneaker'>
                            <div className='sneaker_sale'>#1</div>
                            <img src='/props/portofolio.png' className='sneaker_img'/>
                            <span className='sneaker_name'>My portofolio</span>
                            <span className='sneaker_price'>#ReactJs #ThreeJs #Swiper</span>
                            
                            <a href='https://github.com/Erwnyy' className='button-light'>Github<FaArrowRight /></a>
                        </article>

                        <article className='sneaker'>
                            <div className='sneaker_sale'>#2</div>
                            <img src='/props/webimage.png' className='sneaker_img'/>
                            <span className='sneaker_name'>Web Image JWT</span>
                            <span className='sneaker_price'>#ReactJs #NodeJs #JWT #ContextApi</span>

                            <a href='https://github.com/Erwnyy/webimage' className='button-light'>Github<FaArrowRight /></a>
                           
                        </article>

                        <article className='sneaker'>
                            <div className='sneaker_sale'>#3</div>
                            <img src='/props/snake1.png' className='sneaker_img'/>
                            <span className='sneaker_name'>Snake Game</span>
                            <span className='sneaker_price'>#Python #Turtle</span>
                            
                            <a href='https://github.com/Erwnyy/game-snake' className='button-light'>Github<FaArrowRight /></a>
                        </article>

                        <article className='sneaker'>
                            <div className='sneaker_sale'>#4</div>
                            <img src='/props/commerce1.png' className='sneaker_img'/>
                            <span className='sneaker_name'>E-Commerce</span>
                            <span className='sneaker_price'>#ReactJs #Swiper</span>
                            
                            <a href='https://github.com/Erwnyy/ecommerce' className='button-light'>Github<FaArrowRight /></a>
                        </article>

                        <article className='sneaker'>
                            <div className='sneaker_sale'>#5</div>
                            <img src='/props/img3.jpg' className='sneaker_img'/>
                            <span className='sneaker_name'>Python Telesales Fyllo</span>
                            <span className='sneaker_price'>#Python #Bcrypt #Werkzeugsecurity #Flask</span>
                            
                            <a href='https://github.com/Erwnyy/admin-telesales-python' className='button-light'>Github<FaArrowRight /></a>
                        </article>
                    </div>
                </section>
        </>
  )
}

export default Featured