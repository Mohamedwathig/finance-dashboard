import React from 'react'
import { FiCommand, FiSearch } from 'react-icons/fi'
import { CommandMenu } from './CommandMenue'

const Search = () => {
   const [open, setOpen] = React.useState(false)
  
    return (
        <>
    <div className='bg-stone-200 relative rounded flex items-center text-sm mp-4 px-2 py-1.5'>
      <FiSearch className=' w-full bg-transparent '/>

      <input 
      className='px-1.5 ml-2 bg-transparent border-none outline-none'
       type="Search"
      placeholder='Search'
      onFocus={(e)=>{
e.target.blur();
setOpen(true);

      }}
      />

      <span className=' bg-white p-0.5 flex items-center gap-0.5 rounded absolute right-1.5 top-0.5 mt-0.5'>
        <FiCommand/>k
      </span>
    </div>
<CommandMenu open={open} onOpenChange={setOpen} />
    </>
  )
}

export default Search
