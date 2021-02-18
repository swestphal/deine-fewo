import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Submenu from './Navbar/Submenu'
import Hero from './../pages/Hero'
import Sidebar from './../components/Navbar/Sidebar'
import 'semantic-ui-css/semantic.min.css'
import { GlobalStyles } from '../GlobalStyles';



function App() {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef(null);
  const handleScroll = () => {
    console.log(ref.current.getBoundingClientRect().top)
    if (ref.current) {
      setIsSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <Navbar />
      </div>
      <Sidebar />
      <Hero />
      <Submenu />
      <h2>Content</h2>
      <Footer />
    </>
  );
}

export default App;
