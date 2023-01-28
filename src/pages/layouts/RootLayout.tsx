import { Link, Outlet } from 'react-router-dom'
import { SiSpotify } from 'react-icons/si'
import { MdHomeFilled, MdSearch, MdLibraryMusic } from 'react-icons/md'

function RootLayout() {
  return (
    <div className='flex'>
      <nav className='h-screen bg-black w-[300px] fixed z-50'>
        <div className='flex text-white items-center gap-2 p-6'>
          <SiSpotify size={40} />
          <h1 className='font-bold text-2xl'>Spotify</h1>
        </div>
        <ul className='mt-4 px-6 flex flex-col gap-1'>
          <li className='text-white flex items-center gap-2 hover:bg-slate-900 p-4 rounded-full'>
            <MdHomeFilled size={28} />
            <span>Home</span>
          </li>
          <li className='text-white flex items-center gap-2 hover:bg-slate-900 p-4 rounded-full'>
            <MdSearch size={28} />
            <span>Search</span>
          </li>
          <li className='text-white flex items-center gap-2 hover:bg-slate-900 p-4 rounded-full'>
            <MdLibraryMusic size={28} />
            <span>Your Library</span>
          </li>
        </ul>
      </nav>
      <div className='flex-grow bg-gradient-to-t from-stone-900 to-gray-800'>
        <div className='bg-stone-900 flex items-center justify-end px-6 py-2 fixed w-full z-40'>
          <Link
            to='signup'
            className='px-8 py-3 text-gray-500 font-bold hover:scale-105'
          >
            Sign up
          </Link>
          <Link
            to='login'
            className='bg-white px-8 py-3 rounded-full font-bold hover:scale-105'
          >
            Log in
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
