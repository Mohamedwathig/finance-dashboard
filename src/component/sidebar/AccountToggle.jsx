import React from 'react'
import { FiChevronDown,FiChevronUp } from "react-icons/fi";

const AccountToggle = () => {
  return (
<div className="border-b mb-3 border-stone-300 pb-6">
<button className="flex p-0.5 hover:bg-stone-200 rounded-2xl transition-colors relative w-full items-center">
<img src='https://api.dicebear.com/9.x/notionists/svg'alt='avatar' className='size-8 rounded-3 shrink-0 bg-violet-500 shadow'/>


<div className='text-start ml-2 flex flex-col'>
<span className='text-sm font-bold '>Mohamed khaled </span>
<span className='text-xs  '>momo@12345</span>
</div>
<FiChevronDown className="text-lg absolute right-3 top-1.5 rotate-180" />
<FiChevronUp className="text-lg absolute right-3 top-5 rotate-180" />

      {/* <FiChevronUp className="text-lg" /> */}


      </button>
    </div>
  )
}

export default AccountToggle
