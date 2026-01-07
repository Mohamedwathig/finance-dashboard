import React from 'react'
import { Command, CommandItem } from 'cmdk'
import { useEffect, useState } from 'react'
import { FiEye, FiPlus,FiPhone,FiLink, FiLogOut } from "react-icons/fi";

export const CommandMenu = ({ open, onOpenChange }) => {
    const [value,setValue] = React.useState("")

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)   // ✅ use prop instead of setOpen
      }
    }
    
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, onOpenChange])

  return (
    <Command.Dialog 
    open={open}
    onOpenChange={onOpenChange}
    label="Global Command Menu"
    className='fixed inset-0 bg-stone-950/50 '
    onClick={()=>{onOpenChange(false)}}
    >
       <div
       
       className='bg-white rounded-lg shadow-xl
        border-stone-300 borfer overflow-hidden
         w-full max-w-lg mx-auto ' 

       onClick={(e)=>{e.stopPropagation()}}
       
       >
        <Command.Input
    value={value}
        onValueChange={setValue}        
        placeholder='What Do You Need?'
        className=' relative border-b w-full border-stone-300 p-3 text-lg placeholder:text-stone-400 focus:outline-none '
        />

      <Command.List>
        <Command.Empty className='text-purple-800'>{value}</Command.Empty>
      <Command.Group heading="Team" className=' text-sm p-2 mt-2 text-stone-400'>
        <CommandItem className=' flex items-center  pl-2 gap-2
         cursor-pointer text-sm 
         text-stone-950  hover:bg-stone-200'>
          <FiPlus/>
          Invite Member
        </CommandItem>
        <CommandItem className='  mt-2 flex items-center pl-2 gap-2
         cursor-pointer text-sm text-stone-950
          hover:bg-stone-200'>
          <FiEye/>
          See Org Chart 
        </CommandItem>

      </Command.Group>
         

         <Command.Group heading="integrations " className=' text-sm p-2 mt-2 text-stone-400 '>
        <CommandItem className=' flex items-center  pl-2 gap-2
         cursor-pointer text-sm 
         text-stone-950  hover:bg-stone-200'>
          <FiLink/>
          Link Services
          </CommandItem>
        <CommandItem className=' flex items-center pl-2 gap-2
         cursor-pointer text-sm text-stone-950
          hover:bg-stone-200 mt-2'>
          <FiPhone/>
         Contact Support
        </CommandItem>

      </Command.Group>


    <CommandItem className=' flex items-center p-2 bg-black text-stone-50 gap-2 m-2 rounded cursor-pointer hover:bg-stone-700 '>
      <FiLogOut/>
      Sign Out
      
      </CommandItem>    

      </Command.List>

        </div> 
      
    </Command.Dialog>
  )
}
