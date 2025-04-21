
import React from 'react';
import NavbarSimple from '@/components/NavbarSimple';
import HeroSection from '@/components/HeroSection';
import FeaturedNode from '@/components/FeaturedNode';
import NodeFeatures from '@/components/NodeFeatures';
import ImpactCounter from '@/components/ImpactCounter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarSimple />
      <main className="flex-grow">
        <div className="pt-16"> {/* Space for the fixed navbar */}
          <HeroSection />
          <FeaturedNode />
          <NodeFeatures />
          <ImpactCounter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
