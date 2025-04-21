
import React from 'react';

const ImpactCounter = () => {
  return (
    <section className="py-16 bg-maisha-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Growing Impact</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-maisha-gold to-maisha-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <p className="text-4xl md:text-5xl font-bold text-maisha-gold mb-2">24</p>
            <p className="text-maisha-light/80 font-medium">Active Nodes</p>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-4xl md:text-5xl font-bold text-maisha-green mb-2">156</p>
            <p className="text-maisha-light/80 font-medium">Entrepreneurs</p>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <p className="text-4xl md:text-5xl font-bold text-maisha-blue mb-2">480</p>
            <p className="text-maisha-light/80 font-medium">Acres Regenerated</p>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <p className="text-4xl md:text-5xl font-bold text-maisha-gold mb-2">12K+</p>
            <p className="text-maisha-light/80 font-medium">Community Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;
