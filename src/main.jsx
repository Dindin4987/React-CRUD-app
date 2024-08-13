import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import UserReducer from './UserReducer.jsx'

const store = configureStore({
  reducer: {
    users: UserReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
  </StrictMode>,
)
