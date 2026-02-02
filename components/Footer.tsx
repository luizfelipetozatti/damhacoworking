
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A4A4A] text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Damha Coworking Araraquara. Todos os direitos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">Design e Desenvolvimento com ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
