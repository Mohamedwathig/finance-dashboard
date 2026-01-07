import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './search'
import RouteSelect from './RouteSelect'
import Plan from './Plan'
function Sidebar() {
  return (
    <div className='bg-stone-100 border-b mb-3
       border-stone-300  '>
     <div className='overflow-y-scroll  sticky top-0 h-[calc(100vh-32px-48px)] '>

        <AccountToggle/>
        <Search/>
        <RouteSelect/>
     </div>
     <Plan/>
    </div>

  )
}

export default Sidebar
