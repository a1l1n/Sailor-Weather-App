import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';
import Styles from './Home.module.css'
import Swal from 'sweetalert2'

export default function Home(){
    const [city, setCity] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;

    const onClose = (id) =>{
      setCity(prevState => prevState.filter(c => c.id !== id))
  }

    async function onSearch (city){
      try {
         const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
         if (response.data.main !== undefined) {
          const city = {
            id: response.data.id,
            name: response.data.name,
            min: response.data.main.temp_min,
            max: response.data.main.temp_max,
            description: response.data.weather[0].description,
            img: response.data.weather[0].icon
          }
          setCity(prevState =>{
          if(prevState.some(c => c.name === city.name)) return prevState;
          return [...prevState, city];
          });
          } 
        } catch (error) {
          Swal.fire("Can't find that city, please try again")
          console.log("CATCH", error)
      }
    };
    
  return (
    <div>
      <header className={Styles.home}>
      <NavBar onSearch={onSearch} />
      <Cards city={city} onClose={onClose} className={Styles.cardContainer}/>
      </header>
  </div>
  )
}
