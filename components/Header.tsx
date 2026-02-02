
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Espaços', href: '#espacos' },
    { name: 'Agendamento', href: '#agendamento' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
           <div>
             <span className="text-2xl font-bold text-[#4A4A4A]" style={{ fontFamily: "'Dancing Script', cursive" }}>Damha Coworking</span>
             <p className="text-xs text-gray-500 tracking-wider -mt-1">Saúde, Estética e Bem Estar</p>
           </div>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-[#7A9E91] transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#agendamento" className="hidden md:inline-block bg-[#7A9E91] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">
          Agendar Agora
        </a>
      </div>
    </header>
  );
};

export default Header;
