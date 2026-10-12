import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'

export default function Layout() {
  return (
    <>
        <div className='h-full bg-light'>
            <Topbar />
		          <main className="md:flex-1 h-screen overflow-y-scroll bg-indigo-10">
                  <Outlet />
              </main>
        </div>
    </>
  )
}
