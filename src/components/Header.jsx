import React from 'react'
import '../styles/header.css'

const Header = () => {


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
        <a href="https://drive.google.com/file/d/1Uc-YRfR7aD4A2ykVw1tCCcYZyCNk_wNn/view?usp=sharing" target="blank">
        <button className='cv'>CV-Es<i class="fa-regular fa-circle-down"></i></button>
        </a>

        <a href="https://drive.google.com/file/d/1L-1bQKMJJ0vu5pchAtXF7yf3QguBhxwk/view?usp=sharing" target="blank">
        <button className='cv'>CV-Eng<i class="fa-regular fa-circle-down"></i></button>
        </a>
      
      </div>
    </header>
  )
}

export default Header