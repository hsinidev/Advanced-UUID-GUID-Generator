
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UuidGenerator from './components/UuidGenerator';
import SeoArticle from './components/SeoArticle';
import Modal from './components/Modal';
import { MODAL_CONTENT, ModalId } from './constants';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalId | null>(null);

  const handleOpenModal = (modalId: ModalId) => setActiveModal(modalId);
  const handleCloseModal = () => setActiveModal(null);

  const modalData = activeModal ? MODAL_CONTENT[activeModal] : null;

  return (
    <div className="relative min-h-screen bg-[#0d0d1a] text-gray-200 font-sans flex flex-col items-center overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 bg-[length:200%_200%] animate-nebula z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-grow">
        <Header onNavClick={handleOpenModal} />
        
        <main className="flex-grow flex flex-col items-center justify-center py-12">
          <UuidGenerator />
          <SeoArticle />
        </main>
        
        <Footer />
      </div>

      {modalData && (
        <Modal title={modalData.title} onClose={handleCloseModal}>
          {modalData.content}
        </Modal>
      )}
    </div>
  );
};

export default App;
