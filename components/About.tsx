
import React from 'react';
import { WifiIcon, CoffeeIcon, AirConditionerIcon } from './Icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-center items-center mb-4 text-[#7A9E91]">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#F5F1ED]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">Um Espaço Pensado para Profissionais</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
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
