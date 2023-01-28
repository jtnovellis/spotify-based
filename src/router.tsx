import { createBrowserRouter } from 'react-router-dom'
import MainWrapper from './components/MainWrapper'
import ArtistPage from './pages/ArtistPage'
import HomePage from './pages/HomePage'
import RootLayout from './pages/layouts/RootLayout'

export const router = createBrowserRouter([
  {
    element: <MainWrapper />,
    children: [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: '/artist', element: <ArtistPage /> },
        ],
      },
    ],
  },
])
