import React from 'react';
import Gallery from './Gallery';
import Footer from './Footer';
import Contact from './Contact';
import "./App.css"
import Header from './Header';


function App() {
  return (
    <>

<Header />
    <h1 className='nine'>My Creative Designs  <span>Gallery </span></h1>
    <Gallery />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
