import React from 'react';
import Detail1 from './detail1';
import Detail2 from './detail2';
import Detail3 from './detail3';


export default function Detailslist(){
    return(
        <section id="details" className="details">
        <div className="container">
              <Detail1/>
              <Detail2/>
              <Detail3/>
        </div>
        </section>
    )
}