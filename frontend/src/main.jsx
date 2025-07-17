import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chat from './pages/chat.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" index element={<App/>}/>
    <Route path="/chat" element={<Chat/>}/>
  </Routes>
  </BrowserRouter>,
)
