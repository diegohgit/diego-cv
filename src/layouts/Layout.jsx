import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'

export default function Layout() {
  return (
    <>
        <div className='h-full'>
            <Topbar />
		          <main className="md:flex-1 overflow-y-scroll bg-indigo-10">
                  <Outlet />
              </main>
        </div>
    </>
  )
}
