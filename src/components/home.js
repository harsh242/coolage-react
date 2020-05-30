import React from 'react';
import Hero from './hero/hero';
import About from './about/about';
import Features from './features/features';
import Counter from './counter/counter';
import Detailslist from './details/detailslist';
import Team from './team/team';
import Faq from './faq/faq';
import Contact from './contact/contact';





function Home() {
  return (
    <div className="Home">
      <Hero/>
      <div id="main">
          <About/>
          <Features/>
          <Counter/>
          <Detailslist/>
          <Team/>
          <Faq/>
          <Contact/>
      </div>
      
    
    </div>
  );
}

export default Home;
