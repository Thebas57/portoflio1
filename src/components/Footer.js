import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='img'>
            <img src="./img/logo.svg" alt="logo-footer" />
        </div>
        <div className='copy'>
        Copyright © Théo - 2022
        </div>
        <div className="navbar-networks">
            <div>
              <a href="/#">
                <FaGithubSquare />
              </a>
              <a href="/#">
                <FaLinkedin />
              </a>
            </div>
          </div>
    </div>
  )
}

export default Footer