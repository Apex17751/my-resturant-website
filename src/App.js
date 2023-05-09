import React from 'react';
import './App.css';
import Home from './Home/Home.js'
import Footer from './Footer/Footer';
import Card from './card/card.js'
import Wash from './wash/wash';
import Choose from './Choose/Choose';
import Work from './Work/Work';
import Testimonials from './Teestimonials/Testimonials';
import News from './Newsletter/News';
import Foot from './Foot/Foot';



function App() {
  return (
<div className="app">
 <Home />
  <Wash />
  <Card />
  <Choose />
  <Work />
  <Testimonials />
  <News />
   <Foot /> 
</div>

  );
}

export default App;
