
/**
 * Utilitaire de protection contre l'inspection du code source
 */

// Fonction pour désactiver le clic droit
export const disableRightClick = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
};

// Fonction pour désactiver les raccourcis clavier de développeur
export const disableDevToolsShortcuts = () => {
  document.addEventListener('keydown', (e) => {
    // Ctrl+Shift+I, F12, Ctrl+U
    if (
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      e.key === 'F12' ||
      (e.ctrlKey && e.key === 'u')
    ) {
      e.preventDefault();
      return false;
    }
  });
};

// Fonction pour détecter l'ouverture des outils de développement
export const detectDevTools = () => {
  const threshold = 160;
  const emitEvent = () => {
    window.dispatchEvent(new Event('devtoolschange'));
  };

  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (widthThreshold || heightThreshold) {
      emitEvent();
    }
  }, 1000);

  // Écouteur pour réagir à l'ouverture des DevTools
  window.addEventListener('devtoolschange', () => {
    // Vous pouvez rediriger l'utilisateur ou afficher un message
    console.warn('Inspection du site non autorisée');
  });
};

// Initialiser toutes les protections
export const initProtection = () => {
  if (import.meta.env.PROD) {
    disableRightClick();
    disableDevToolsShortcuts();
    detectDevTools();
    
    // Message dans la console pour dissuader l'inspection
    console.log(
      '%cAttention!',
      'color: red; font-size: 30px; font-weight: bold;'
    );
    console.log(
      '%cCe site est protégé. Toute tentative d\'inspection ou extraction du code source est enregistrée.',
      'font-size: 16px;'
    );
  }
};
