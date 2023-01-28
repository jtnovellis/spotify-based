export interface ChartSongs {
  chart_items: Chartitem[]
  next_page: number
}

interface Chartitem {
  _type: string
  type: string
  item: Item
}

interface Item {
  _type: string
  annotation_count: number
  api_path: string
  artist_names: string
  full_title: string
  header_image_thumbnail_url: string
  header_image_url: string
  id: number
  instrumental: boolean
  language: string
  lyrics_owner_id: number
  lyrics_state: string
  lyrics_updated_at: number
  path: string
  pyongs_count?: number
  relationships_index_url: string
  release_date_components: Releasedatecomponents
  release_date_for_display: string
  release_date_with_abbreviated_month_for_display: string
  song_art_image_thumbnail_url: string
  song_art_image_url: string
  stats: Stats
  title: string
  title_with_featured: string
  updated_by_human_at: number
  url: string
  featured_artists: (Featuredartist | Featuredartists2)[]
  primary_artist: Primaryartist
}

interface Primaryartist {
  _type: string
  api_path: string
  header_image_url: string
  id: number
  image_url: string
  index_character: string
  is_meme_verified: boolean
  is_verified: boolean
  name: string
  slug: string
  url: string
  iq?: number
}

interface Featuredartists2 {
  _type: string
  api_path: string
  header_image_url: string
  id: number
  image_url: string
  index_character: string
  is_meme_verified: boolean
  is_verified: boolean
  name: string
  slug: string
  url: string
  iq: number
}

interface Featuredartist {
  _type: string
  api_path: string
  header_image_url: string
  id: number
  image_url: string
  index_character: string
  is_meme_verified: boolean
  is_verified: boolean
  name: string
  slug: string
  url: string
}

interface Stats {
  unreviewed_annotations: number
  concurrents: number
  hot: boolean
  pageviews: number
}

interface Releasedatecomponents {
  year: number
  month: number
  day: number
}
