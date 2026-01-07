import React from 'react'
import { FiCalendar } from 'react-icons/fi'

const Topbar = () => {
  return (
    <div className='border-b mb-3 
       border-stone-300 pb-3 '>
<div className='flex items-center justify-between'>
<div className='  flex flex-col'>
  <span className='text-xm font-bold '>Good morning mohamed</span>
  <span className='text-xs   text-stone-500'>tuesday , Aug 8th 2025</span>
</div>

<button className=' flex text-sm items-center 
gap-2 bg-stone-300 
transition-colors hover:bg-violet-100
 hover:text-violet-700 px-3 py-1.5 '> 
 <FiCalendar/>
 <span> prev 6 Months</span>
 
 </button>

</div>

<div>

</div>
<button></button>

    </div>
  )
}

export default Topbar
