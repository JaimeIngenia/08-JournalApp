import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { JournalApp } from './JournalApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  


    <React.StrictMode>
      <BrowserRouter>
        <JournalApp />
        {/* <App/> */}
      </BrowserRouter>
    </React.StrictMode>


  
)
