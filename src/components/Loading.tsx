import { loader } from '../assets'

export default function Loading({ title }: { title?: string }) {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <img src={loader} alt='loader' className='w-32 object-contain h-32' />
      <h1 className='font-bold text-2xl text-white mt-2'>
        {title || 'Loading...'}
      </h1>
    </div>
  )
}
