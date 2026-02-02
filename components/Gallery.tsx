
import React, { useState } from 'react';

interface Image {
  id: number;
  src: string;
  alt: string;
}

const images: Image[] = [
  { id: 1, src: '/images/ambiente01.jpg', alt: 'Ambiente Damha Coworking 1' },
  { id: 2, src: '/images/ambiente02.jpg', alt: 'Ambiente Damha Coworking 2' },
  { id: 3, src: '/images/ambiente03.jpg', alt: 'Ambiente Damha Coworking 3' },
  { id: 4, src: '/images/ambiente04.jpg', alt: 'Ambiente Damha Coworking 4' },
  { id: 5, src: '/images/ambiente05.jpg', alt: 'Ambiente Damha Coworking 5' },
  { id: 6, src: '/images/ambiente06.jpg', alt: 'Ambiente Damha Coworking 6' },
  { id: 7, src: '/images/ambiente07.jpg', alt: 'Ambiente Damha Coworking 7' },
  { id: 8, src: '/images/ambiente08.jpg', alt: 'Ambiente Damha Coworking 8' },
  { id: 9, src: '/images/ambiente09.jpg', alt: 'Ambiente Damha Coworking 9' },
  { id: 10, src: '/images/ambiente10.jpg', alt: 'Ambiente Damha Coworking 10' },
  { id: 11, src: '/images/ambiente11.jpg', alt: 'Ambiente Damha Coworking 11' },
  { id: 12, src: '/images/ambiente12.jpg', alt: 'Ambiente Damha Coworking 12' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openLightbox = (image: Image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <section id="galeria" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4">Conheça Nossos Ambientes</h2>
            <p className="text-xl text-[#636E72] mt-4 max-w-2xl mx-auto leading-relaxed">
              Espaços modernos, aconchegantes e totalmente equipados para você trabalhar com conforto e profissionalismo.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium text-sm">Ver Imagem</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[#C9A068] transition-colors z-10"
            aria-label="Fechar"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 md:left-8 text-white hover:text-[#C9A068] transition-colors z-10"
            aria-label="Imagem anterior"
          >
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 md:right-8 text-white hover:text-[#C9A068] transition-colors z-10"
            aria-label="Próxima imagem"
          >
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="max-w-6xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
