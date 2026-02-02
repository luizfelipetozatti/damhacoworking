
import React from 'react';

interface Space {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const spaces: Space[] = [
  {
    name: 'Sala Terapêutica',
    description: 'Ideal para psicólogos, terapeutas e coaches. Ambiente acolhedor e privativo.',
    price: 'R$ 45/hora',
    imageUrl: '/images/ambiente05.jpg',
  },
  {
    name: 'Sala de Estética',
    description: 'Equipada com maca, mocho e iluminação adequada para procedimentos estéticos.',
    price: 'R$ 50/hora',
    imageUrl: '/images/ambiente11.jpg',
  },
  {
    name: 'Consultório Odontológico',
    description: 'Ambiente profissional e sóbrio, perfeito para consultas médicas e avaliações.',
    price: 'R$ 55/hora',
    imageUrl: '/images/ambiente06.jpg',
  },
];

const SpaceCard: React.FC<{ space: Space }> = ({ space }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-[#F7F3EF]">
    <div className="relative overflow-hidden">
      <img src={space.imageUrl} alt={space.name} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#2D3436] mb-3">{space.name}</h3>
      <p className="text-[#636E72] mb-5 leading-relaxed">{space.description}</p>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-[#5B8573]">{space.price}</div>
        <a href="#agendamento" className="text-[#C9A068] hover:text-[#B38F5C] font-semibold transition-colors">Agendar →</a>
      </div>
    </div>
  </div>
);

const Spaces: React.FC = () => {
  return (
    <section id="espacos" className="py-24 bg-[#F7F3EF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4">Nossos Espaços</h2>
          <p className="text-xl text-[#636E72] mt-4 max-w-2xl mx-auto leading-relaxed">
            Salas privativas, mobiliadas e prontas para uso. Alugue por hora, período ou dia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <SpaceCard key={space.name} space={space} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;
