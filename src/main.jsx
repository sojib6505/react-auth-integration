import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layout/Root.jsx'
import Home from './Componenets/Home.jsx'
import Login from './Componenets/Login.jsx'
import SignUp from './Componenets/SignUp.jsx'
import Provider from './Context/Provider.jsx'

const router = createBrowserRouter([
  {path: '/', Component: Root,
    children: [
      {index: true, Component: Home},
      {path:'login',Component: Login },
      {path:'signup',Component: SignUp}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
