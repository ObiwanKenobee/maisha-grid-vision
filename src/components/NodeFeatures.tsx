
import React from 'react';
import { Calendar, BookOpen, MapPin } from 'lucide-react';

const NodeFeatures = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-maisha-gold" />,
      title: "Solar Kitchen",
      description: "Powered by renewable energy, our solar kitchens serve as culinary innovation hubs and production centers."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-maisha-green" />,
      title: "Micro-School",
      description: "Education centers that combine traditional knowledge with future skills, creating the next generation of innovators."
    },
    {
      icon: <Calendar className="h-8 w-8 text-maisha-blue" />,
      title: "AI Systems",
      description: "Intelligent systems that optimize resource usage, predict yields, and connect nodes into a unified network."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-maisha-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-maisha-dark mb-4">
            Modular Node Components
          </h2>
          <p className="text-lg text-maisha-dark/70 max-w-3xl mx-auto">
            Each node is a self-contained system with modular components that can be customized to local needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="node-card text-center animate-fade-in"
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              <div className="inline-flex justify-center items-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-maisha-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-maisha-dark/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NodeFeatures;
