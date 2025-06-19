import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // For animate__animated classes
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
