import React from 'react';
import './navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
     
      <div className="logo">
      <div className="logocontainer">
      <img src={logo} alt="Logo" />
  
</div>

        <ul>
          <li><a href='/rent' className="prop" >Rent</a></li>
          <li><a href='/sell' className="prop" >Sell</a></li>
          <li><a href='/manageproperty' className="prop">Manage Property<select></select></a></li>
          <li><a href='/resources' className="prop">Resources<select></select></a></li>


          <ul id='user'>
            <li><a href='/login' className="login">LogIn</a></li>
            
            <li><a href='/signup' className="signup">SignUp</a></li>
          </ul>

        </ul>

</div>
      </div>


    </>
  )
}

export default Navbar