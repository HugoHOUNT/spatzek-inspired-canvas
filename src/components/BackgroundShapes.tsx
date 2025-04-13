
import React, { useEffect, useRef } from 'react';

const BackgroundShapes = () => {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shapesRef.current) return;
    
    // Sélectionner toutes les formes et appliquer des positions et délais aléatoires
    const shapes = shapesRef.current.querySelectorAll('.shape');
    shapes.forEach(shape => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      (shape as HTMLElement).style.top = `${randomY}%`;
      (shape as HTMLElement).style.left = `${randomX}%`;
      const delay = Math.random() * 20;
      (shape as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div 
      ref={shapesRef} 
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
    >
      {/* Cercles */}
      {[...Array(20)].map((_, i) => (
        <svg key={`circle-${i}`} viewBox="0 0 100 100" className="shape absolute w-16 h-16 opacity-20 dark:opacity-30 fill-indigo-900 dark:fill-indigo-300">
          <circle cx="50" cy="50" r="40" />
        </svg>
      ))}
      
      {/* Croix */}
      {[...Array(15)].map((_, i) => (
        <svg key={`cross-${i}`} viewBox="0 0 100 100" className="shape absolute w-12 h-12 opacity-20 dark:opacity-30 fill-purple-900 dark:fill-purple-300">
          <rect x="40" y="20" width="20" height="60" rx="2" />
          <rect x="20" y="40" width="60" height="20" rx="2" />
        </svg>
      ))}
      
      {/* Triangles */}
      {[...Array(15)].map((_, i) => (
        <svg key={`triangle-${i}`} viewBox="0 0 100 100" className="shape absolute w-20 h-20 opacity-20 dark:opacity-30 fill-pink-900 dark:fill-pink-300">
          <polygon points="50,20 80,80 20,80" />
        </svg>
      ))}
      
      <style>
        {`
        .shape {
          animation: float 20s infinite ease-in-out;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) translateX(10px) rotate(2deg);
          }
          66% {
            transform: translateY(20px) translateX(-15px) rotate(-2deg);
          }
        }
        `}
      </style>
    </div>
  );
};

export default BackgroundShapes;
