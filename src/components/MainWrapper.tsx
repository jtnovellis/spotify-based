import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { store } from '../redux/store'

const queryClient = new QueryClient()

function MainWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </QueryClientProvider>
  )
}

export default MainWrapper
