import userEvent from '@testing-library/user-event';
import React from 'react';

import '../assets/styles/Search.css';

const Search = (props) => {
  //este componente se encarga de capturar los datos para la busqueda
  const { onChange, onSubmit, data } = props;

  return (
    <div className={data.className || 'Search'}>
      <form className='Search-form' onSubmit={onSubmit}>
        <input
          className='Form-user'
          name='userName'
          type='text'
          placeholder='UserNick'
          onChange={onChange}
          value={data.name}
        />
        <button className='Form-button'>
          {data.nameButton || 'Search User'}
        </button>
      </form>
    </div>
  );
};

export default Search;
