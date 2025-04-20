import React from 'react';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-white text-gray-900 dark:bg-blue-900 dark:text-white"
    >
     <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/hero.webp')",
  }}
></div>

      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 z-10"></div>


      <div className="relative z-20 min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="text-[#f04343]">ENER</span>
          <span className="text-gray-900 dark:text-white">GYM</span>
          </h1>
          <p className="text-xl md:text-3xl font-bold mb-8">
          THE ART OF WELLNESS. <br/> TRANSFORM YOUR BODY, TRANSFORM YOUR LIFE.
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join our state-of-the-art fitness facility in Muththettugala and
            start your journey to a healthier, stronger you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#membership"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
            >
              JOIN NOW
            </a>
            <a
              href="#about"
              className="bg-transparent hover:bg-gray-100 text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-md text-lg font-semibold transition-colors dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-900"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
