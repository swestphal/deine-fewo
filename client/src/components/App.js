import React from 'react';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Hero from './../pages/Hero'
import 'semantic-ui-css/semantic.min.css'
import { GlobalStyles } from '../GlobalStyles';



function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />

      <h2>Content</h2>
      <Footer />
    </>
  );
}

export default App;
