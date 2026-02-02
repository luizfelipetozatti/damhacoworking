
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D3436]/60 to-[#5B8573]/40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
          Damha Coworking Araraquara
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
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
