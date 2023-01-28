import { useQuery } from 'react-query'
import Error from '../components/Error'
import Loading from '../components/Loading'
import SongCard from '../components/SongCard'
import { getGeniusChartSongs } from '../services/geniusSongs'
import { Chartitem } from '../types'

function HomePage() {
  const { data, isLoading, error } = useQuery('chartSongs', getGeniusChartSongs)

  if (isLoading) return <Loading />
  if (error) return <Error />

  const songs = data.chart_items.map((song: Chartitem) => (
    <SongCard song={song.item} />
  ))

  return (
    <section className='overflow-y-auto ml-[300px] mt-20'>
      <div>
        <h2 className='text-white text-4xl font-bold ml-16'>Discover</h2>
      </div>
      <div className='flex flex-wrap gap-5 p-6 pl-16'>{songs}</div>
    </section>
  )
}

export default HomePage
