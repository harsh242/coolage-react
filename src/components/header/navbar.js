import React from 'react';
import {NavLink} from 'react-router-dom';


 export default class Navbar extends React.Component  {
   
render(){
  
    return (
      <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
  
        <div className="logo mr-auto">
          <h1 className="text-light"><NavLink to="/"><span>Coolage</span></NavLink></h1>
        
          {/*<a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>*/}
        </div>
        <nav class=" nav-menu d-none d-lg-block" >
          <ul>
            <li  ><NavLink to="/" exact activeStyle={{color:"white" }}>Home</NavLink></li>
            <li><NavLink to="/#features" exact activeStyle={{color:"white"}}>Features</NavLink></li>
            <li ><NavLink to="/campus" activeStyle={{color:"white"}} >Campus Ambassador Program</NavLink></li>
            <li ><NavLink to="/intern" activeStyle={{color:"white"}}>Internships</NavLink></li>
          </ul>
     
  </nav>
      </div>
    </header>
    )
  }

 }

