
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Spaces from './components/Spaces';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F7F3EF] text-[#2D3436]">
      <Header />
      <main>
        <Hero />
        <About />
        <Spaces />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
