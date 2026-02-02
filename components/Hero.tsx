
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-[#4A4A4A] bg-opacity-40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Damha Coworking Araraquara
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          Seu espaço de Estética, Saúde e Bem-Estar. Ambientes profissionais e prontos para atender você.
        </p>
        <a 
          href="#agendamento" 
          className="bg-[#7A9E91] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
        >
          Agende sua Sala
        </a>
      </div>
    </section>
  );
};

export default Hero;
