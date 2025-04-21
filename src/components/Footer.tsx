
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-maisha-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Maisha<span className="text-maisha-gold">Grid</span>
            </h3>
            <p className="text-maisha-light/70 mb-4">
              The world's first Living System-as-a-Service platform—regenerating land, 
              lives, and local economies.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <div className="h-10 w-10 rounded-full bg-maisha-light/10 flex items-center justify-center">
                <span className="text-maisha-gold">FB</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-maisha-light/10 flex items-center justify-center">
                <span className="text-maisha-gold">TW</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-maisha-light/10 flex items-center justify-center">
                <span className="text-maisha-gold">IG</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/vision" className="text-maisha-light/70 hover:text-maisha-gold transition-colors">
                  The Dream
                </Link>
              </li>
              <li>
                <Link to="/mechanics" className="text-maisha-light/70 hover:text-maisha-gold transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/movement" className="text-maisha-light/70 hover:text-maisha-gold transition-colors">
                  The Movement
                </Link>
              </li>
              <li>
                <Link to="/invest" className="text-maisha-light/70 hover:text-maisha-gold transition-colors">
                  Invest
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-maisha-light/70 hover:text-maisha-gold transition-colors">
                  Culture as Product
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Join Us</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/entrepreneurs" className="text-maisha-light/70 hover:text-maisha-gold transition-colors">
                  For Entrepreneurs
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-maisha-light/70 hover:text-maisha-gold transition-colors">
                  For Investors
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-maisha-light/70 hover:text-maisha-gold transition-colors">
                  For Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-maisha-light/70 hover:text-maisha-gold transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-maisha-light/70">
                Nairobi Headquarters
              </li>
              <li className="text-maisha-light/70">
                info@maishagrid.com
              </li>
              <li className="text-maisha-light/70">
                +254 712 345 678
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-maisha-light/10 pt-8 mt-8 text-center text-maisha-light/50 text-sm">
          <p>&copy; {new Date().getFullYear()} MaishaGrid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
