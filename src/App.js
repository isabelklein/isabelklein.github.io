import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className='contact'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
