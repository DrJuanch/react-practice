import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  //Estado de react es inmutable, para cambiarlo se necesita función actualizadora de estado y controlada por reactjs (segundo parametro)
  
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla para el almuerzo"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }} />
  );
}

export { TodoSearch }