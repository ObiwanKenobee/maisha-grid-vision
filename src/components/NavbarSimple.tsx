
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NavbarSimple = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-display text-2xl font-bold text-maisha-dark">
                Maisha<span className="text-maisha-gold">Grid</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-maisha-dark/80 hover:text-maisha-gold transition-colors font-medium">
              Home
            </Link>
            <Link to="/vision" className="text-maisha-dark/80 hover:text-maisha-gold transition-colors font-medium">
              The Dream
            </Link>
            <Link to="/mechanics" className="text-maisha-dark/80 hover:text-maisha-gold transition-colors font-medium">
              How It Works
            </Link>
            <Link to="/movement" className="text-maisha-dark/80 hover:text-maisha-gold transition-colors font-medium">
              The Movement
            </Link>
            <Link to="/invest" className="text-maisha-dark/80 hover:text-maisha-gold transition-colors font-medium">
              Invest
            </Link>
          </nav>
          
          <div>
            <Button className="bg-maisha-gold hover:bg-maisha-gold/90 text-white">
              Join the Movement
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarSimple;
