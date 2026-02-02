
import React from 'react';
import { MapPinIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#F7F3EF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4">Onde Estamos</h2>
          <p className="text-xl text-[#636E72] mt-4 max-w-2xl mx-auto leading-relaxed">
            Venha nos conhecer! Estamos localizados em uma área de fácil acesso em Araraquara.
          </p>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-[#5B8573] to-[#4A6B5F] text-white p-10 rounded-2xl shadow-2xl">
            <div className="md:w-1/2 text-center md:text-left">
                <MapPinIcon className="w-14 h-14 mx-auto md:mx-0 mb-6 text-white"/>
                <h3 className="text-3xl font-bold mb-4">Damha Coworking Araraquara</h3>
                <p className="mb-4">
                Av. Laert José Tarallo Mendes, 891 - Sala 2 <br/>
                Vila Ferroviária, Araraquara - SP, 14802-315
                </p>
                <p className="mb-1"><span className="font-semibold">Telefone:</span> (16) 99999-9999</p>
                <p><span className="font-semibold">Email:</span> contato@damhacoworking.com.br</p>
                 <a 
                  href="https://maps.app.goo.gl/GPHJ4evMgDNYdiyV9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-white text-[#5B8573] px-8 py-3 rounded-full font-semibold hover:bg-[#F7F3EF] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Ver no Google Maps
                </a>
            </div>
            <div className="md:w-1/2 w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.517332152683!2d-48.1654495247346!3d-21.760634279860686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3d646ffffff%3A0x6b77c59c5d0705a!2sDamha%20Coworking%20Araraquara%20-%20Est%C3%A9tica%2C%20Sa%C3%BAde%20e%20Bem%20Estar!5e0!3m2!1sen!2sbr!4v1721516088288!5m2!1sen!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
