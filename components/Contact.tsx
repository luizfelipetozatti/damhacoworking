
import React from 'react';
import { MapPinIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-[#FCFBF9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">Onde Estamos</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Venha nos conhecer! Estamos localizados em uma área de fácil acesso em Araraquara.
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-[#7A9E91] text-white p-8 rounded-xl shadow-lg">
            <div className="md:w-1/2 text-center md:text-left">
                <MapPinIcon className="w-12 h-12 mx-auto md:mx-0 mb-4 text-white"/>
                <h3 className="text-2xl font-bold mb-2">Damha Coworking Araraquara</h3>
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
                  className="mt-6 inline-block bg-white text-[#7A9E91] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
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
