export async function getGeniusChartSongs() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
    },
  }
  return await fetch(
    `${import.meta.env.VITE_RAPIDAPI_BASE_URL}/chart/songs/?per_page=40&page=1`,
    options
  ).then((response) => response.json())
}
