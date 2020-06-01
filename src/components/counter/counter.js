import React from 'react';

export default function Counter(){
    return(
        <section id="counts" className="counts">
        <div className="container">
  
          <div className="row" data-aos="fade-up">
  
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="icofont-simple-smile"></i>
                <p>Team of</p>
                <span data-toggle="counter-up">22</span>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="icofont-document-folder"></i>
                <p>Hours Worked</p>
                <span data-toggle="counter-up">200</span>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-live-support"></i>
                <p>Hours Of Support</p>
                <span data-toggle="counter-up">1,463</span>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-users-alt-5"></i>
                <p>Hard Workers</p>
                <span data-toggle="counter-up">15</span>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}