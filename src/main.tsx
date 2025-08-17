import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root container
const container = document.getElementById('root');

if (!container) {
  throw new Error("No element with ID 'root' found in the document");
}

// Create a root and render the App component
const root = createRoot(container);
root.render(<App />);
