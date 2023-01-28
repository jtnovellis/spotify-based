import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import {
  nextSong,
  playPause,
  prevSong,
  selectPlayer,
} from '../redux/features/playerSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Controls from './Controls'
import Player from './Player'
import SongBar from './SongBar'
import VolumeBar from './VolumeBar'

export default function MusicPlayer() {
  const dispatch = useAppDispatch()
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useAppSelector(selectPlayer)
  const [volume, setVolume] = useState('0.3')
  const [songTime, setSongTime] = useState('0')
  const [songDuration, setSongDuration] = useState('0')
  const [currentTime, setCurrentTime] = useState('0')
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true))
  }, [currentIndex])

  function changeVolume(e: ChangeEvent<HTMLInputElement>) {
    setVolume(e.target.value)
  }

  function changeCurrentTime(e: ChangeEvent<HTMLInputElement>) {
    setCurrentTime(e.target.value)
  }

  function changeSongTime(e: SyntheticEvent<HTMLAudioElement, Event>) {
    const val = `${e.currentTarget.currentTime}`
    setSongTime(val)
  }

  function changeSongDuration(e: SyntheticEvent<HTMLAudioElement, Event>) {
    const val = `${e.currentTarget.currentTime}`
    setSongDuration(val)
  }

  function handleNextSong() {
    dispatch(playPause(false))

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length))
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)))
    }
  }

  function handlePrevSong() {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1))
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)))
    } else {
      dispatch(prevSong(currentIndex - 1))
    }
  }

  function handlePlayPause() {
    if (!isActive) return

    if (isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(playPause(true))
    }
  }

  return (
    <section className='fixed bottom-0 w-full flex justify-between py-8 px-6 backdrop-blur-md gap-11 bg-white/10 z-50 rounded-tl-xl rounded-tr-xl'>
      <div>
        <h4>In development</h4>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Controls />
        <SongBar
          val={songTime}
          songTime={songTime}
          duration={songDuration}
          onInput={changeCurrentTime}
          setCurrentTime={setCurrentTime}
        />
        <Player
          onLoadedData={changeSongDuration}
          onTimeUpdate={changeSongTime}
          onEnded={handleNextSong}
          vol={volume}
          songtime={songTime}
          repeat={repeat}
          activeSong={activeSong}
          isPlaying={isPlaying}
        />
      </div>
      <VolumeBar volume={volume} onChange={changeVolume} />
    </section>
  )
}
