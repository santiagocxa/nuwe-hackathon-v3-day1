import React from 'react';

import '../assets/styles/Header.css';
import gitHubLogo from '../assets/static/logoGit.png';

const Header = () => (
  <div className='Header'>
    <h1 className='Header-title'>GitHub User</h1>
    <img className='Header-logo' src={gitHubLogo} atl='Logo' />
  </div>
);

export default Header;
