
import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/hooks/useAuth';

const Login = () => {
  const { isAuthenticated } = useAuth();
  
  // Rediriger si déjà connecté
  if (isAuthenticated) {
    return <Navigate to="/admin/projects" replace />;
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-dark text-black dark:text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Espace <span className="text-gradient">Administrateur</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Connectez-vous pour gérer vos projets
          </p>
        </div>
        
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
