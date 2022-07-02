import React from 'react'
import './footer.css'

import { AiOutlineGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div id="footer" className='container_footer'>
          <h3 className='title_footer'> Portofolio build with maxcan by <Link to='/' className='button_footer'>Erwnyy</Link></h3>
          <div className='data_footer'>
              <div className='footer_icon'><a href='https://github.com/Erwnyy' className='footer_reacticon'><AiOutlineGithub /></a></div>
              <div className='footer_icon'><a href='https://www.linkedin.com/in/erwin-yuliyanto-77aba4190/' className='footer_reacticon'><AiFillLinkedin /></a></div>
              <div className='footer_icon'><a href='https://www.linkedin.com/in/erwin-yuliyanto-77aba4190/' className='footer_reacticon'><AiFillFacebook /></a></div>
          </div>
      </div>
    </div>
  )
}

export default Footer