import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'
import useSwipeNavigation from '../hooks/useSwipeNavigation'

export default function Layout() {

  const swipeHandlers = useSwipeNavigation();
  return (
    <>
        <div className='h-full bg-light'>
            <Topbar />
		          <main className="md:flex-1 h-screen overflow-y-scroll"
                    {...swipeHandlers}>
                  <Outlet />
              </main>
        </div>
    </>
  )
}
