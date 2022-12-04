import React from 'react'
import Card from '../Card/Card'
import Styles from './Cards.module.css';
/* 
Cada vez que se rendericen varios componentes, es decir, cuando se utilice un map (por ej) es NECESARIO que cada uno contenga su ID/KEY identificatorio
*/
export default function Cards({ city, onClose }) {
  return (
    <div className={Styles.container}>
      { city.map(c => 
        <Card
        onClose={() => onClose(c.id)}
        key = {c.id}
        name = {c.name}
        max = {c.max}
        min = {c.min}
        description = {c.description}
        img = {c.img}
        />
        )} 
    </div>
  )
}
