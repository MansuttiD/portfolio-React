import React from 'react'
import '../styles/cardinfo.css'
import picture from '../assets/picture.png'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillGithub } from 'react-icons/ai'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { BiMap } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { useTranslation } from "react-i18next";

const CardInfo = ({theme}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <article className='card__info'>
      <div className='card__img'>
        <img src={picture} alt="" />
      </div>
      <div className='lenguage'>
          <img className='spain' onClick={() => i18n.changeLanguage("es")} src="../img/spain.svg"/>
          <img className='usa' onClick={() => i18n.changeLanguage("en")} src="../img/flag-for-flag-united-states-svgrepo-com.svg"/>
        </div>
        
        <h1 className='card__title' >Daniel Mansutti</h1>
        <ul >
          <li className='card__description'>{t("preload.span")} (JS | React | HTML | CSS | NodeJs | SEO | Wordpress)</li>
          <li className='card__email'>Daniel.Mansutti@gmail.com</li>
        </ul>
<div className='card__icons'>
            <a data-theme={theme} className='icon__linkedin' href="https://www.linkedin.com/in/daniel-mansutti/" target="_blank"><TiSocialLinkedinCircular/></a>
            <a data-theme={theme} className='icon__gitHub' href="https://github.com/MansuttiD" target="_blank"><AiFillGithub/></a>
            <a data-theme={theme} className='icon__twitter' href="https://twitter.com/mansutti" target="_blank"><TiSocialTwitterCircular/></a>
        </div>
        <div className='card__ubication'>
        <BiMap/>
          <p>Venezuela</p>
        </div>

        <div className='card__button'>
        <a href="mailto: daniel.mansutti@gmail.com" target="blank"><button className='btn__mail card__btn'>
                <FiMail/>
            </button></a>
        <a href="https://wa.link/m1e2dc" target="blank"><button className='btn__wpp card__btn'>
                <BsWhatsapp/>
            </button></a>
        </div>
    </article>
  )
}

export default CardInfo