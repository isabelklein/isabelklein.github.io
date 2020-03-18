import React from 'react';
import '../App.css';

import Header from './Header';
import Work from './work';


function Home() {
  return (
    <div className="Home">

      <div className="App-header">
      <Header></Header>
      </div>

      <div className='work'>
        <Work></Work>
      </div>
      
    </div>
  );
}

export default Home;
