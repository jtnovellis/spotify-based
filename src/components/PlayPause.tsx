import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

interface PlayPauseProps {
  isPlaying: boolean
  activeSong?: {
    title: string
  }
  song?: {
    title: string
  }
  handlePause?: () => {}
  handlePlay?: () => {}
}

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}: PlayPauseProps) =>
  isPlaying ? (
    <FaPauseCircle size={45} className='text-[#1ED760]' onClick={handlePause} />
  ) : (
    <FaPlayCircle size={45} className='text-[#1ED760]' onClick={handlePlay} />
  )

export default PlayPause
