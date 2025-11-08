
import React from 'react';
import { ModalId } from '../constants';

interface HeaderProps {
  onNavClick: (modalId: ModalId) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const navItems: { label: string; modalId: ModalId }[] = [
    { label: 'About', modalId: 'about' },
    { label: 'Contact', modalId: 'contact' },
    { label: 'Guide', modalId: 'guide' },
    { label: 'Privacy Policy', modalId: 'privacy' },
    { label: 'Terms of Service', modalId: 'tos' },
    { label: 'DMCA', modalId: 'dmca' },
  ];

  return (
    <header className="py-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Advanced UUID/GUID Generator
        </h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {navItems.map((item) => (
              <li key={item.modalId}>
                <button
                  onClick={() => onNavClick(item.modalId)}
                  className="text-gray-300 hover:text-brand-gold transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
