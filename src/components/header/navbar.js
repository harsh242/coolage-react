import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.png';


 export default class Navbar extends React.Component  {
   
render(){
  
    return (
      <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
  
        <div className="logo mr-auto">
          <NavLink to="/"><img src={logo} alt="" className="img-fluid"/></NavLink>
        </div>
        <nav class=" nav-menu d-none d-lg-block" >
          <ul>
            <li  ><NavLink to="/" exact activeStyle={{color:"white" }}>Home</NavLink></li>
            <li ><NavLink to="/intern" activeStyle={{color:"white"}}>Internships</NavLink></li>
            <li>   <a href="https://twitter.com/CoolAgeapp" className="twitter"><i className="bx bxl-twitter"></i></a> </li>
            <li>     <a href="https://www.facebook.com/coolageapp/" className="facebook"><i className="bx bxl-facebook"></i></a> </li>
            <li>     <a href="https://www.instagram.com/coolageapp/" className="instagram"><i className="bx bxl-instagram"></i></a> </li>
            <li>     <a href="https://www.linkedin.com/company/coolageapp/" className="linkedin"><i className="bx bxl-linkedin"></i></a></li>
          </ul>
     
  </nav>
      </div>
    </header>
    )
  }

 }

