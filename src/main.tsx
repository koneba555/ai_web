import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Home from './Home.tsx'
import SendMoney from './SendMoney.tsx'
import History from './History.tsx'
import Exchange from './Exchange.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/history" element={<History />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
