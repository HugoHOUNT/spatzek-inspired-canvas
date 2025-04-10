
import React from 'react';
import Navbar from '@/components/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-dark text-black dark:text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Me <span className="text-gradient">Contacter</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Cette page est en cours de développement
          </p>
        </div>
        
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Formulaire de contact à venir bientôt...
          </p>
        </div>
      </main>
      
      <footer className="py-8 px-6 text-center border-t border-gray-200 dark:border-white/10">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Hountondji Hugo. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
