import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalContextProvider } from './contexts/GlobalContext'
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
