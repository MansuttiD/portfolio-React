import React from 'react'
import '../styles/about.css'

const About = ({theme}) => {
  return (
    <div className='about__container' data-theme={theme}>
      <div className="about__container-text">
        <p>
        Creatividad ilimitada, responsabilidad absoluta y 0% miedo de aprender todo lo que sea necesario para ser parte del crecimiento y éxito de un equipo.        </p>
        <br />
        <div className='container__pcenter'>
          <p className='pcenter'>¿Por qué soy el developer correcto para tu proyecto?</p>
        </div>
        <br />
        <p>Me considero una persona sanamente competitiva y a la vez muy empática, me gusta ayudar en todo el que pueda, ver crecer los proyectos en los que me involucro, y ser parte importante de su éxito. </p>
        <br />
        <p>Poseo características de liderazgo, y creo que mi entusiasmo por seguir aprendiendo cada día es contagioso.</p>
        <br />
        <p>Estoy preparado para afrontar cualquier reto.</p>
      </div>
    </div>
  )
}

export default About