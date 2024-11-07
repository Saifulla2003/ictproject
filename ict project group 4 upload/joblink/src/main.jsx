import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './welcomehome.css'
import './index.css'
import './App.css'
import './AdminHomePage.css'
import './Llog.css'
import './welcomehome.css'
import './adminaddjob.css'
import './userhome.css'
import './managejob.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
