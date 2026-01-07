import React from 'react'
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const StatCards = () => {
  return (
    <>
      <Cards
      title="Gross Revenue" 
      value="$434,323" 
      pilltext="2.7%"
      trend="up"
      period=" from Jan 1st -Jul 31st "/>
      <Cards 
      title="Avg Order" 
      value="$252,423" 
      pilltext="2,8%"
      trend="up"
      period="from Jan 1st -Jul 31st"/>
      <Cards 
      title="Trailing year" 
      value="$252,423" 
      pilltext="2,8%"
      trend="down"
      period="from Jan 1st -Jul 21st"/>
    </>
  )
}

export default StatCards
const Cards = ({title, value,pilltext,trend,period}) => {

return(
    <div className="p-4 bg-stone-50 
     rounded  border
     border-stone-300 col-span-4">

<diV className="flex  justify-between ">
<div>
<p className='text-sm'>{title}</p>
<h1 className='text-3xl font-bold'>{value}</h1>
</div>

<span
  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-white text-xs font-medium ${
    trend === "up" ? "bg-green-500" : "bg-red-600"
  }`}
>
  {trend === "up" ? <FiTrendingUp className="text-sm" /> : <FiTrendingDown className="text-sm" />}
  {pilltext}
</span>

</diV>
<p className='text-xs text-stone-500 mt-5'>{period}</p>

    
    
    </div>
)

}
