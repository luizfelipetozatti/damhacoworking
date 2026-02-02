
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Spaces from './components/Spaces';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FCFBF9] text-[#4A4A4A]">
      <Header />
      <main>
        <Hero />
        <About />
        <Spaces />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
