import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layer/Main.jsx';
import Home from './Pages/Home.jsx';
import Certificate from './Componenets/Certificate/Certificate.jsx';
import Projects from './Componenets/Projects/Projects.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/certificate',
        element: <Certificate></Certificate>,
      },
      {
        path: '/projects',
        element: <Projects></Projects>,
      },
  ]
  
      
  
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className=' '>
  <RouterProvider router={router} />
  </div>
  </StrictMode>,
)
