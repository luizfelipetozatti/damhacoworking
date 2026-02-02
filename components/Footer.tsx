
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D3436] text-white">
      <div className="container mx-auto px-6 py-10 text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} Damha Coworking Araraquara. Todos os direitos reservados.</p>
        <p className="text-sm text-[#7A9E91] mt-3">Design e Desenvolvimento com ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
