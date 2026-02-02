
import React, { useState, useEffect } from 'react';

const images = [
  '/images/ambiente01.jpg',
  '/images/ambiente02.jpg',
  '/images/ambiente03.jpg',
  '/images/ambiente04.jpg',
  '/images/ambiente05.jpg',
  '/images/ambiente06.jpg',
  '/images/ambiente07.jpg',
  '/images/ambiente08.jpg',
  '/images/ambiente09.jpg',
  '/images/ambiente10.jpg',
  '/images/ambiente11.jpg',
  '/images/ambiente12.jpg',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Carrossel de Imagens */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      ))}
      
      {/* Overlay mais escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D3436]/75 to-[#5B8573]/65"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
          Damha Coworking Araraquara
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          Seu espaço de Estética, Saúde e Bem-Estar. Ambientes profissionais e prontos para atender você.
        </p>
        <a 
          href="#agendamento" 
          className="inline-block bg-[#C9A068] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#B38F5C] shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Agende sua Sala
        </a>
      </div>
    </section>
  );
};

export default Hero;
