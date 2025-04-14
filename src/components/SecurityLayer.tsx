
import { useEffect, useState } from 'react';

export function SecurityLayer() {
  const [securityViolation, setSecurityViolation] = useState(false);

  useEffect(() => {
    // Écouteur pour détecter l'ouverture des DevTools
    const handleDevToolsChange = () => {
      setSecurityViolation(true);
    };

    window.addEventListener('devtoolschange', handleDevToolsChange);

    // Détection de débogage
    const debuggerDetection = () => {
      const startTime = new Date().getTime();
      debugger; // Ce debugger est délibéré pour détecter si un debugger est actif
      const endTime = new Date().getTime();
      
      if (endTime - startTime > 100) {
        setSecurityViolation(true);
      }
    };

    // Exécuter régulièrement
    const interval = setInterval(debuggerDetection, 1000);

    return () => {
      window.removeEventListener('devtoolschange', handleDevToolsChange);
      clearInterval(interval);
    };
  }, []);

  if (securityViolation) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center text-white p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">⚠️ Accès non autorisé</h2>
          <p>L'inspection de ce site est interdite pour des raisons de sécurité.</p>
          <button 
            onClick={() => setSecurityViolation(false)}
            className="mt-6 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  return null;
}
