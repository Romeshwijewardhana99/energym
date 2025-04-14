import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TrainersSection } from './components/TrainersSection';
import { TimetableSection } from './components/TimetableSection';
import { ContactSection } from './components/ContactSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { MembershipSection } from './components/MembershipSection';
export function App() {
  return <ThemeProvider>
      <div className="w-full min-h-full bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <MembershipSection/>
          <TrainersSection />
          <TimetableSection />
          <ReviewsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}