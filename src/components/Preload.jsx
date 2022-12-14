import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/preload.css'
import {SiReact} from "react-icons/si"
import {SiRedux} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"
import picture from '../assets/picture.png'
import { useTranslation } from "react-i18next";

const Preload = () => {
    const [t, i18n] = useTranslation("global");
  return (
    <div className='preload'>
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
                <img src={picture} alt="avatar" />
            </div>
            <div className="content">
                <div className="details">
                    <div className="actionBtn">
                        <h2>Daniel Mansutti<br/><span>{t("preload.span")}</span></h2>
                        <Link to='/portfolio'><button className='btn1'>{t("preload.button")}</button></Link>
                    </div>
                    <section className='contnt__skills'>
                        <div className="data">
                            <h3><SiReact/><br/><span>React</span></h3>
                            <h3><SiRedux/><br/><span>Redux</span></h3>
                            <h3><IoLogoNodejs/><br/><span>Node</span></h3>
                        </div>
                        <div className="actionBtn btn2">
                            <Link to='/portfolio'><button>{t("preload.button")}</button></Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Preload