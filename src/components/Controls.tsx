import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs'

export default function Controls() {
  return (
    <div className='flex gap-7 items-center'>
      <BsArrowRepeat size={25} className='text-white' />
      <MdSkipPrevious size={35} className='text-white' />
      <BsFillPlayFill size={35} className='text-white' />
      <MdSkipNext size={35} className='text-white' />
      <BsShuffle size={25} className='text-white' />
    </div>
  )
}
