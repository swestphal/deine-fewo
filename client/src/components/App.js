import React from 'react';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Submenu from './Navbar/Submenu'
import Hero from './../pages/Hero'
import Sidebar from './../components/Navbar/Sidebar'
import 'semantic-ui-css/semantic.min.css'
import { GlobalStyles } from '../GlobalStyles';



function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
      <h2>Content</h2>
      <Footer />
    </>
  );
}

export default App;
