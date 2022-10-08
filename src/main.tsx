import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'

import store from './redux/store'
import router from './routes/Navegation'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'



library.add(fas)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>  
      <RouterProvider router={router} />    
     </Provider>
  </React.StrictMode>
)