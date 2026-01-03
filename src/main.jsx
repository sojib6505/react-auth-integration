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
import PrivateRoute from './Componenets/Routes/PrivateRoute.jsx'
import Order from './Componenets/Order.jsx'
import Profile from './Componenets/Profile.jsx'
import Dashboard from './Componenets/Dashboard.jsx'

const router = createBrowserRouter([
  {path: '/', Component: Root,
    children: [
      {index: true, Component: Home},
      {path:'login',Component: Login },
      {path:'signup',Component: SignUp},
      {path:'order',element: <PrivateRoute><Order></Order></PrivateRoute>},
       {path:'profile',element: <PrivateRoute><Profile/></PrivateRoute>},
       {path:'dashboard',element: <PrivateRoute><Dashboard/></PrivateRoute>}
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
