import { useState } from 'react';
import './base.scss';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Plan from './components/Plan';
import Reviews from './components/Reviews';

function App() {
     const [showMenu, setShowMenu] = useState(false);
     const mobileMenuHandler = () => {
       setShowMenu((prev) => !prev);
       document.body.classList.toggle('showMenu');
     };
  return (
    <>
    <Header showMenu={showMenu} toggleMenu={mobileMenuHandler}/>
    <Hero/>
    <Features/>
    <Reviews/>
    <Plan/>
    <Footer/>
    </>
  );
}

export default App;
