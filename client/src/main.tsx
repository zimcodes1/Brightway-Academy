import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'

const routes = createBrowserRouter([
  {path:'', element:<LandingPage />},
  {path:'/about', element:<AboutPage />},
  {path:'/gallery', element:<GalleryPage />},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
