import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// HashRouter: o GitHub Pages nao tem servidor para reescrever rotas,
// entao as URLs ficam no formato /#/imersao/hmw e funcionam ao recarregar.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
