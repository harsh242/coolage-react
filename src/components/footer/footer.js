import React from 'react';
import {NavLink} from 'react-router-dom';
export default function Footer(){
    return(
      <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center">
  
            <div className="col-lg-6 col-md-6">
              <div className="footer-info">
                <h3>Coolage</h3>
                <p className="pb-3"><em>Your all in one gateway to stay Updated, Organized and Connected to your College Life.</em></p>
                <p>
                  <strong>Phone:</strong> +91 72219 04716 , +91 79749 22411<br/>
                  <strong>Email:</strong> hello@coolage.app<br/>
                </p>
                <div className="social-links mt-3">
                  <a href="https://twitter.com/CoolAgeapp" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="https://www.facebook.com/coolageapp/" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="https://www.instagram.com/coolageapp/" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="https://www.linkedin.com/company/coolageapp/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/#about">About us</NavLink></li>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/404">Terms of service</NavLink></li>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/404">Privacy policy</NavLink></li>
              </ul>
            </div>
  
        
  
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Get Early Access</h4>
              <p>Digitalize your college life</p>
              <form action="" method="post">
                <input type="email" name="email" value="Enter Your Email Address"/> <input type="submit" value="Request Invite" />
              </form>
  
          </div>
        </div>
      </div>
  
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span><a href="https://coolage.app/">Coolage</a></span></strong>. All Rights Reserved
        </div>
      </div>
      </div>
    </footer>
    )
 
    
}