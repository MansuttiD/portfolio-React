import React from 'react'
import '../styles/cardproject.css'
import { MdRemoveRedEye } from 'react-icons/md';


const CardProject = ({name, img, domain, description, video}) => {
  
  const handleMove = e => {
    e.target.previousSibling.play()
}

const handleOut = e => {
    e.target.previousSibling.pause()
}
  
  return (
    
    <article className='card__project'>

      <video
        src={video}
        type='video/mp4' loop
        className='clip'
        muted >
      </video>

      <div className='card__content'    
      onMouseOut={handleOut}
      onMouseEnter={handleMove}>

        <div className='content_titles'>
          <h2 className='card__title'>{name}</h2>
          <span>{description}</span>
        </div>
          <div className='content__icons'>

          <a className='card__link' href={domain} target="_blank"><MdRemoveRedEye/></a>
          </div>
          
       </div>
    </article>

  )
}

export default CardProject