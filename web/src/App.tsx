import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css'

import logoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
        <img src={logoImg} alt="" />

     </div>
    </div>
  );
}

export default App;
