import React from 'react';

export default function Contact(){
    return(
      <section id="contact" className="contact">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div className="row">

          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div className="info">
             

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>hello@coolage.app</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+91 72219 04716 , +91 79749 22411</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">

            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter your Name" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 characters as Subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    )
 
    
}