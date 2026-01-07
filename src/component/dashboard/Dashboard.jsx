import React from 'react'
import Topbar from './Topbar'
import Grid from './Grid'

function Dashboard() {
  return (
    <div className='bg-stone-100 h-[200vh]'>
        <Topbar/>
        <Grid/>
    </div>
  )
}

export default Dashboard
