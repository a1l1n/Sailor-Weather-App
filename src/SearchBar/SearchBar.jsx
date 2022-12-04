import React, { useState } from 'react';
import Styles from './SearchBar.module.css';

//ONSEARCH() es la función que trae la info desde la API

export default function SearchBar({ onSearch }){
  const [city, setcity] = useState('');
  
  function citySubmit(e){
    e.preventDefault();
    onSearch(city);
    setcity('')
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setcity(e.target.value)
  }
  
  return (
<div className={Styles.searchBox}>
    <form className={Styles.searchForm} onSubmit={e => citySubmit(e)}>
    <input 
    className={Styles.searchText}
    type="text"
    placeholder='Search your City...' 
    value={city}
    onChange={e => handleInputChange(e)}
    required
    /> 
    <button className={Styles.searchButton} type='submit'>
        Search
    </button>
    </form>
</div>
  )
}

/* 
Etiqueta <fieldset></fieldset> encuadra input y legend (genera un margen)
onSubmit -> por defecto recarga la página. Es por ello que se utiliza el e.preventDefault()
*/