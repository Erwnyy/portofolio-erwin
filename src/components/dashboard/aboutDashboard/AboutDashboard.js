import React from 'react'
import './AboutDashboard.css'
import { Link } from 'react-router-dom'

const AboutDashboard = () => {
  return (
    <div>
                  {/* <hr/> */}
        <section className="section Dashboard">
                <div className='herosection-desc'>
                    <h2 className="herosection_disc">
                        <span>About Me</span> <br />
                        <p className='about-herosection'>
                            Saya seorang Full Stack Developer tertarik dibidang 3D web dengan teknologi React Js, Three Js, Spring dan React Frame yang lainnya. dan juga untuk Back end saya tertarik dibidang teknologi mengunakan Node js dan Python.
                            Saya cepat belajar sesuatu hal yang baru dan juga cepat beradaptasi dengan tim dan juga siap berkerja individu maupun tim.
                        </p>
                    </h2>

                    <Link to="/aboutme" className='button_other'>
                        Other
                    </Link>
                </div>
            </section>
    </div>
  )
}

export default AboutDashboard