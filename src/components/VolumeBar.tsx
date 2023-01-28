import { ChangeEvent } from 'react'
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs'

interface VolumeBarProps {
  volume: string
  min?: number
  max?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  setVolume?: () => {}
}
const VolumeBar = ({
  volume = '0.3',
  min = 0,
  max = 1,
  onChange,
  setVolume,
}: VolumeBarProps) => {
  const value = parseFloat(volume)

  return (
    <div className='flex items-center justify-end'>
      {value <= 1 && value > 0.5 && (
        <BsFillVolumeUpFill size={25} color='#FFF' />
      )}
      {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color='#FFF' />}
      {value === 0 && <BsFillVolumeMuteFill size={25} color='#FFF' />}
      <input
        type='range'
        step='any'
        value={value}
        min={min}
        max={max}
        className='2xl:w-40 lg:w-32 md:w-32 h-1 ml-2'
        onChange={onChange}
      />
    </div>
  )
}

export default VolumeBar
