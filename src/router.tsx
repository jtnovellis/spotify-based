import { createBrowserRouter } from 'react-router-dom'
import ArtistPage from './pages/ArtistPage'
import HomePage from './pages/HomePage'
import RootLayout from './pages/layouts/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/artist', element: <ArtistPage /> },
    ],
  },
])
