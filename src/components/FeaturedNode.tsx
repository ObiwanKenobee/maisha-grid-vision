
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const FeaturedNode = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-maisha-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-maisha-dark mb-4">
            Empowering Communities Through Regenerative Micro-Economies
          </h2>
          <p className="text-lg text-maisha-dark/70 max-w-3xl mx-auto">
            Our nodes are self-sustaining hubs of innovation, education, and economic growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="node-card animate-fade-in-right" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-4">
              <MapPin className="text-maisha-gold mr-2 h-5 w-5" />
              <h3 className="font-display text-xl font-bold">Nairobi Node</h3>
            </div>
            
            <div className="aspect-video rounded-lg bg-gradient-to-br from-maisha-green/20 to-maisha-blue/20 mb-4 overflow-hidden">
              <div className="h-full w-full flex justify-center items-center">
                <p className="text-maisha-dark/60 font-medium">Node visualization</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white rounded-md p-3 text-center shadow-sm">
                <p className="text-sm text-maisha-dark/60">Solar Kitchen</p>
                <p className="font-bold text-maisha-gold">Active</p>
              </div>
              <div className="bg-white rounded-md p-3 text-center shadow-sm">
                <p className="text-sm text-maisha-dark/60">Hydroponics</p>
                <p className="font-bold text-maisha-green">Growing</p>
              </div>
              <div className="bg-white rounded-md p-3 text-center shadow-sm">
                <p className="text-sm text-maisha-dark/60">AI Systems</p>
                <p className="font-bold text-maisha-blue">Online</p>
              </div>
            </div>
            
            <Button className="w-full bg-maisha-dark hover:bg-maisha-dark/90 text-white">
              View Node Details
            </Button>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div>
              <h3 className="font-display text-2xl font-bold text-maisha-dark mb-2">
                A New Agricultural Paradigm
              </h3>
              <p className="text-maisha-dark/70">
                Combining traditional farming wisdom with cutting-edge technology to create 
                sustainable food systems that regenerate the land while producing abundant harvests.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-maisha-dark mb-2">
                Powering Local Entrepreneurs
              </h3>
              <p className="text-maisha-dark/70">
                Each node serves as a launchpad for local entrepreneurs, providing the infrastructure, 
                technology, and support needed to build thriving businesses.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-maisha-dark mb-2">
                Accelerating Pan-African Growth
              </h3>
              <p className="text-maisha-dark/70">
                Our interconnected network of nodes creates a resilient economic ecosystem that 
                supports cross-border trade, knowledge sharing, and collaborative innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNode;
