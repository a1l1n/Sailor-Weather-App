import React from 'react';
import Style from './Card.module.css';

export default function Card({ img, max, min, name, onClose, key, id, description }) {
  
  return (
    <div className={Style.weatherWrapper}>
      <div className={Style.weatherCard}>

        <div className={Style.info}>
          <span className={Style.name}>{name}</span>
          <span className={Style.description}>{description}</span>
        </div>

        <div className={Style.alfCard}>
          <div className={Style.icon}>
            <img className={Style.iconWeather}
           src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Image'/>
          </div>

          <div className={Style.temp}>
            <span className={Style.min}>Temp. Min: {min}°C</span>
            <span className={Style.max}>Temp. Max: {max}°C</span> 
          </div>

          <div className={Style.button}>
            <button className={Style.btn} onClick={onClose}>Close</button>
          </div>
        </div>
        

      </div>
    </div>
  )
}
