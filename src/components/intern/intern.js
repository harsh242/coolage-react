import React from "react";
import Lottie from "react-lottie";
import intern from "../../lotties/intern.json";
import {NavLink} from 'react-router-dom';

export default class Intern extends React.Component{
    
    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: intern,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        return(
      <div className="container pt-5">

      <div className="row justify-content-center pt-5">
      <Lottie options={defaultOptions} height="700" width="700"/>
      </div>
      <h1 className="text-center" >No Intern Openings for Now <br/></h1>
      <div className="row justify-content-center">
      <NavLink to="/" > <span className="btn ">Back to Home</span></NavLink>
      </div>
  </div>
           
        )
    }
}