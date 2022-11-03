import React from 'react'
import '../styles/navInfo.css'


const NavInfo = ({show, theme}) => {
  return (
    <div data-theme={theme} className={`nav__info ${show === 1 ? 'show' : ''}`} >
      <div className='nav__info-about'>
          <h3 className='nav__info-title m-bottom'>ABOUT ME</h3>
          <span className='m-bottom'>Hey! I'll be glad to help your project</span>
          <ul className='nav__info-list m-bottom'>
              <li className='nav__info-item'> — Web Design</li>
              <li className='nav__info-item'> — Mobile Design</li>
              <li className='nav__info-item'> — Scrum</li>
              <li className='nav__info-item'> — SEO</li>
              <li className='nav__info-item'> — Frontend Dev (JS | React | HTML | CSS | GIT)</li>
          </ul>
        </div>
        <h3 className='nav__info-title m-bottom'>Contact with me</h3>
        <ul className='info__contact m-bottom'>
            <li><span>Telf: +584163179547</span></li> 
            <li><span>Email: daniel.mansutti@gmail.com</span></li>
        </ul>
    </div>
  )
}

export default NavInfo