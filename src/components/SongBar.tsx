import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface SongBarProps {
  val: string
  min?: string
  duration: string
  onInput: (e: ChangeEvent<HTMLInputElement>) => void
  setCurrentTime: Dispatch<SetStateAction<string>>
  songTime: string
}

const SongBar = ({
  val,
  min = '0',
  duration,
  onInput,
  setCurrentTime,
  songTime,
}: SongBarProps) => {
  const max = parseFloat(duration)
  const appTime = parseFloat(songTime)
  const value = parseFloat(val)

  const getTime = (time: number) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`

  return (
    <div className='sm:flex flex-row items-center'>
      <button
        type='button'
        onClick={() => setCurrentTime(`${appTime - 5}`)}
        className='lg:mr-4 lg:block text-white'
      >
        -
      </button>
      <p className='text-white'>{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type='range'
        step='any'
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className='md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg'
      />
      <p className='text-white'>{max === 0 ? '0:00' : getTime(max)}</p>
      <button
        type='button'
        onClick={() => setCurrentTime(`${appTime + 5}`)}
        className='lg:ml-4 lg:block text-white'
      >
        +
      </button>
    </div>
  )
}

export default SongBar
