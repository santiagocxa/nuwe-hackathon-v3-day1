import React, { useState } from 'react';
import Search from '../components/Search';
import Profile from '../components/Profile';

const Home = () => {
  const [userData, setUserData] = useState({
    name: '',
    displayUser: false,
    className: 'Search-home',
    nameButton: 'Loguin',
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      name: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      displayUser: true,
      className: 'Search-close',
    });
  };

  return (
    <>
      <Search
        data={userData}
        onChange={(event) => handleChange(event)}
        onSubmit={(event) => handleSubmit(event)}
      />
      {userData.displayUser === true && (
        <Profile nickName={userData.name} />
      )}
    </>
  );
};

export default Home;
