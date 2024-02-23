import React from 'react'

export default function About() {
  return (
    <div className='about-container'>
      <img className='about-container__img' src='https://www.financebuzz.net/wp-content/uploads/2021/06/Ernest-Khalimov-768x697.png'></img>
      <div className='about-container__description'>
        <p><strong>Who I am: </strong>Artur Kudyrko</p>
        <p><strong>Specialization: </strong>Frontend Developer</p>
        <ul>
          <h1>Techlologies, which I used:</h1>
          <li>- React</li>
          <li>- SaSS</li>
          <li>- React Router library</li>
          <li>- AntD React Library</li>
        </ul>
        <a className='about-container__description-link' href='https://github.com/Artur0412-KU'>My GitHub</a>
      </div>
    </div>
  )
}
