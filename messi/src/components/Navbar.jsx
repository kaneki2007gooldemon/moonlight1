import React from 'react'
import "../App.css"
let logo = require('./images/Vector.png')
let logo2 = require('./images/Vector2.png')
let imglico = require('./images/imglico.png')
let imgtelo = require('./images/imgtelo.png')
const Navbar = () => {
  return (
    <div className='block-1'>
     <header>
        <div className='header-1'>
            <h1>Moonlight</h1>
        </div>
        <div className='header-2'>
            <p>Каталог</p>
            <p>О нас</p>
            <p>Контакты</p>
            <img src={logo} alt="" />
            <img src={logo2} alt="" />
        </div>
      </header>
      <div className='after-header'>
          <div className='imglico'>
              <img src={imglico} alt="" />
              <p>Уход для лица</p>
          </div>
          <div className='textAL'>
              <h1>MOONLIGHT</h1>
              <p>Натуральная косметика<br/>для бережного ухода за кожей</p>
              <button>Подробнее</button>
          </div>
          <div className='imgtelo'>
               <img src={imgtelo} alt="" />
               <p>Уход для тела</p>
          </div>
      </div>
     

    </div>
  )
}

export default Navbar
