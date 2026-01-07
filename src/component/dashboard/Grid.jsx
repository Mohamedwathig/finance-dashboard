import React from 'react'
import StatCards from './StatCards'
import Graph from './Graph'   // ✅ add this line
import Radarusage from './Radarusage'

const Grid = () => {
  return (
    <div className='  px-4 grid grid-cols-12 gap-3 '>
      <StatCards/>
      <Graph/>
      <Radarusage/>

    </div>
  )
}

export default Grid
