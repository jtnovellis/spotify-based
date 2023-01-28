import { Item } from '../types'
import PlayPause from './PlayPause'

interface SongCardProps {
  song: Item
}
export default function SongCard({ song }: SongCardProps) {
  return (
    <div className='bg-gray-900 relative group p-3 w-[200px] h-[300px] rounded-md hover:bg-gray-800 shadow-xl transition duration-150 ease-in-out'>
      <div className='mx-auto'>
        <img
          src={song.song_art_image_thumbnail_url}
          alt={song.title}
          className='w-full h-full rounded-md'
        />
        <button className='absolute right-6 bottom-32 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
          <PlayPause isPlaying={false} />
        </button>
      </div>
      <div className='mt-4'>
        <h3 className='text-white font-bold'>{song.title}</h3>
        <p className='text-gray-600'>{song.artist_names}</p>
      </div>
    </div>
  )
}
