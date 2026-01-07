import React from 'react'

const Plan = () => {
  return (
<div className="sticky top-[calc(100vh-40px-16px)]
  border-stone-400  ">
    {/* border */}
  <div className="absolute top-0 left-0 w-full border-t border-stone-400 translate-y-[-20px]"></div>
    {/* border */}
        <div className='flex items-center gap-6 ' >
            
            <div >
            <h1 className='font-bold'>Interprise</h1>
            <h1 className='text-stone-400'>pay as you can </h1>
            </div>
            
            <button className='bg-stone-200 px-4 py-2'>Support</button>

        </div>
      
    </div>
  )
}

export default Plan
