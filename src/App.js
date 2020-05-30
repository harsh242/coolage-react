import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Home from './components/home';
import Navbar from './components/header/navbar';
import Footer from './components/footer/footer';
import Error from './components/404/error';
import Campus from './components/campus/campus';
import Intern from './components/intern/intern';

import './assets/css/style.css';



function App() {
  
  return (
<Router onUpdate={() => window.scrollTo(0, 0)}>
  <Switch>
       <div className="App">

         <Navbar/>
         <ScrollToTop>
         <Route exact path="/" component={Home}/>
         <Route exact path="/campus" component={Campus}/>
         <Route exact path="/intern" component={Intern}/>
         <br/>
         <Route path="/404" component={Error}/>
         <br/>
         </ScrollToTop>
         <Footer/>
       </div>
  </Switch>
</Router>

  );
}

export default App;
