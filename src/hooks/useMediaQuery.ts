
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Mise à jour initiale
    setMatches(media.matches);
    
    // Fonction de callback lors d'un changement
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Ajout de l'écouteur d'événement
    media.addEventListener('change', listener);
    
    // Nettoyage
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
};
