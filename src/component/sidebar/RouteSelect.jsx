import React from 'react';
import { FiDollarSign, FiPaperclip, FiHome, FiUsers } from 'react-icons/fi';

const RouteSelect = () => {
  return (
    <div className='flex flex-col  '>
      <Rout Icon={FiHome} selected={true} title="Home"/>
      <Rout Icon={FiUsers} selected={false} title="Team"/>
      <Rout Icon={FiPaperclip} selected={false} title="Invoices"/>
      <Rout Icon={FiDollarSign} selected={false} title="Finance"/>
    </div>
  )
}

const Rout = ({ selected, Icon, title }) => {
  return (
    <button className={`flex items-center 
    px-2 py-1.5 gap-4
hover:bg-stone-300 rounded transition-[box-shadow,background-color,color]
     cursor-pointer ${ selected? `bg-white font-bold `:`hover:bg-stone-200 bg-transparent`}`} >
      <Icon />
      <span>{title}</span>
    </button>
  )
}

export default RouteSelect;
