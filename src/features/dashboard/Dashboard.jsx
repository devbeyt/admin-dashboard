import React from 'react'
import Routers from '../routes/Routers'
import './dashboard.css'
import Sidebar from './../components/sidebar/Sidebar'

function Dashboard() {
  return (
    <div className='dashboard'>
        <Sidebar/> 
        <Routers/>
    </div>
  )
}

export default Dashboard