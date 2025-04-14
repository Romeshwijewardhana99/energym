import React, { useCallback, useEffect, useState } from 'react';
import { X as CloseIcon, ChevronLeft, ChevronRight } from 'lucide-react';
export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [
    { url: '/gallery/gym1.jpeg', alt: 'Modern gym interior' },
    { url: '/gallery/gym2.jpeg', alt: 'People working out' },
    { url: '/gallery/gym3.jpeg', alt: 'People working out' },
    { url: '/gallery/gym4.jpeg', alt: 'Cardio equipment' },
    { url: '/gallery/gym7.jpg', alt: 'Weightlifting area' },
    { url: '/gallery/gym6.jpeg', alt: 'People working out' },
  ];
  
  const openModal = (index: number) => {
    setSelectedImage(index);
  };
  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);
  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % images.length);
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;
      switch (event.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeModal]);
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);
  return <section id="gallery" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            OUR GALLERY
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facility, equipment, and
            vibrant fitness community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 bg-white dark:bg-gray-800" onClick={() => openModal(index)}>
              <img src={image.url} alt={image.alt} className="w-full h-64 object-cover" />
            </div>)}
        </div>
      </div>
      {/* Modal */}
      {selectedImage !== null && <div className="fixed inset-0 z-50" onClick={closeModal}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-90"></div>
          {/* Modal content */}
          <div className="relative z-50 h-full flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 text-white hover:text-blue-300 focus:outline-none z-50" aria-label="Close gallery">
              <CloseIcon size={24} />
            </button>
            <img src={images[selectedImage].url} alt={images[selectedImage].alt} className="max-h-[90vh] max-w-[90vw] object-contain" />
            <button onClick={() => navigateImage('prev')} className="absolute left-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none" aria-label="Previous image">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => navigateImage('next')} className="absolute right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none" aria-label="Next image">
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>}
    </section>;
};