import React from 'react';

import '../assets/styles/Repo.css';
//este componente se encarga de renderisar los repositorios optenidos de GitHub
const Repo = ({ item }) => {
  console.log(item);
  return (
    <div className='Repo'>
      <h1>{item.name.toUpperCase()}</h1>
      <p>Languaje: {item.languaje}</p>
      <p>Description: {item.description}</p>
      <p>ID: {item.id}</p>
    </div>
  );
};

export default Repo;
