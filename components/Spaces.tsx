
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
    imageUrl: 'https://picsum.photos/400/300?image=20',
  },
  {
    name: 'Sala de Estética',
    description: 'Equipada com maca, mocho e iluminação adequada para procedimentos estéticos.',
    price: 'R$ 50/hora',
    imageUrl: 'https://picsum.photos/400/300?image=180',
  },
  {
    name: 'Consultório Médico',
    description: 'Ambiente profissional e sóbrio, perfeito para consultas médicas e avaliações.',
    price: 'R$ 55/hora',
    imageUrl: 'https://picsum.photos/400/300?image=244',
  },
];

const SpaceCard: React.FC<{ space: Space }> = ({ space }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
    <img src={space.imageUrl} alt={space.name} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#4A4A4A] mb-2">{space.name}</h3>
      <p className="text-gray-600 mb-4">{space.description}</p>
      <div className="text-xl font-semibold text-[#B99280]">{space.price}</div>
    </div>
  </div>
);

const Spaces: React.FC = () => {
  return (
    <section id="espacos" className="py-20 bg-[#FCFBF9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">Nossos Espaços</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
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
