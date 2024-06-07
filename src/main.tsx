import React from 'react'
import ReactDOM from 'react-dom/client'

//component
import App from './App.tsx'

//css
import './index.css'

//redux toolkit
import store from './store/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
