
import React from 'react';
import { WifiIcon, CoffeeIcon, AirConditionerIcon } from './Icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300 border border-[#F7F3EF]">
    <div className="flex justify-center items-center mb-5 text-[#5B8573]">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-[#2D3436]">{title}</h3>
    <p className="text-[#636E72] leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4">Um Espaço Pensado para Profissionais</h2>
          <p className="text-xl text-[#636E72] mt-4 max-w-2xl mx-auto leading-relaxed">
            Oferecemos um ambiente moderno, climatizado e totalmente equipado para profissionais da saúde, estética e bem-estar.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<WifiIcon className="w-12 h-12" />} 
            title="Wi-Fi de Alta Velocidade" 
            description="Conectividade estável para você e seus clientes durante todo o período de locação." 
          />
          <FeatureCard 
            icon={<CoffeeIcon className="w-12 h-12" />} 
            title="Copa Completa" 
            description="Um espaço agradável com café, água e todas as comodidades para uma pausa relaxante." 
          />
          <FeatureCard 
            icon={<AirConditionerIcon className="w-12 h-12" />} 
            title="Ambiente Climatizado" 
            description="Todas as nossas salas são climatizadas para garantir o máximo de conforto para todos." 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
