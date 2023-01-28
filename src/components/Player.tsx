import { useRef, useEffect, SyntheticEvent } from 'react'
import { Item } from '../types'

interface PlayerProps {
  activeSong: Item
  isPlaying: boolean
  vol: string
  songtime: string
  onEnded: () => void
  onTimeUpdate: (e: SyntheticEvent<HTMLAudioElement, Event>) => void
  onLoadedData: (e: SyntheticEvent<HTMLAudioElement, Event>) => void
  repeat: boolean
}

const Player = ({
  activeSong,
  isPlaying,
  vol,
  songtime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}: PlayerProps) => {
  const ref = useRef<HTMLAudioElement>(null)

  const volume = parseFloat(vol)
  const songTime = parseFloat(songtime)

  if (ref.current) {
    if (isPlaying) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (ref.current) {
      ref.current.currentTime = songTime
    }
  }, [songTime])

  return (
    <audio
      src={activeSong.url}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  )
}

export default Player
