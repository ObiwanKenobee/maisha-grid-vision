
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pattern-background geometric-pattern">
      <div className="max-w-5xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
        <h1 className="hero-title mb-6">
          We don't just serve food. <br className="hidden md:block" />
          We serve futures.
        </h1>
        
        <p className="hero-subtitle max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
          The world's first Living System-as-a-Service platform—regenerating land, 
          lives, and local economies.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.5s'}}>
          <Button className="cta-button-primary">Explore the Vision</Button>
          <Button variant="outline" className="cta-button-secondary">Launch a Node</Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-10 w-10 text-maisha-gold opacity-80" />
      </div>
      
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-maisha-light/60 to-transparent opacity-70"></div>
    </section>
  );
};

export default HeroSection;
