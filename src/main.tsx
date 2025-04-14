
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initProtection } from './utils/protection.ts'

// Initialiser les protections
initProtection();

createRoot(document.getElementById("root")!).render(<App />);
