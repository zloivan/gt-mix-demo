
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] text-[#C0C0C0] min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
