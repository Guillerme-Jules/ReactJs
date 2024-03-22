import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{backgroundColor: '#F0F0F2', minHeight: '100vh'}}>
    <App />
    </div>
  </React.StrictMode>,
)
