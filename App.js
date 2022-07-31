import React from 'react';
 import Card from './Card';
import Heading from './Components/Heading';
import Main from './Main';
// import CustomSearch from './Components/CustomSearch';
import Navbar from './Components/Navbar';
import Filterui from './Components/Filterui';
import './App.css';




const App = () => {
  return (
   <>
<div className="app">
   <Navbar />
<Heading/>
<Filterui/>
   <Main/>
   </div>


  
  

    </>
  );  
};

export default App