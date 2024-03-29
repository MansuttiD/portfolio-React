import React from 'react'
import '../styles/header.css'
import { useTranslation } from "react-i18next";


const Header = () => {
  const [t, i18n] = useTranslation("global");

  return (
    // <header className='header'>
    //     <h2 className='header__title'>FrontEnd Dev</h2>
    //     <p className='header__description'>forntendmart@gmail.com</p>
    // </header>
    <header className='header'>
      <div className='wrapper'>
        <h2 className='static-txt'>I'm a</h2>
          <ul className='dynamic-txts'>
            <li><span>Sistem Ing</span></li>
            <li><span>Enthusiastic</span></li>
            <li><span>Awesome</span></li>
            <li><span>DEVELOPER</span></li>
          </ul>
      </div>
      <div className='cv__container'>
        <a href="https://drive.google.com/file/d/1LFMXCiLx_hG5lr0DG9VBHfGzMSXZ9RXj/view?usp=share_link" target="blank">
        <button className='cv'>CV-Es<i class="fa-regular fa-circle-down"></i></button>
        </a>

        <a href="https://drive.google.com/file/d/1QXwFskpPaDTaj3c3Oyfjrc82gOB5wHR3/view?usp=share_link" target="blank">
        <button className='cv'>CV-Eng<i class="fa-regular fa-circle-down"></i></button>
        </a>
      </div>

    </header>
  )
}

export default Header