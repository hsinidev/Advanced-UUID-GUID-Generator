
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-auto text-center text-gray-400">
      <div className="mb-2">
        <span className="font-bold text-brand-gold">Powered by </span>
        <a
          href="https://github.com/hsinidev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-brand-gold hover:text-yellow-300 transition-colors"
        >
          HSINI MOHAMED
        </a>
      </div>
      <div>
        <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
          doodax.com
        </a>
        <span className="mx-2">|</span>
        <a href="mailto:hsini.web@gmail.com" className="hover:text-gray-200 transition-colors">
          hsini.web@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
