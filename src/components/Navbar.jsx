import React, { useContext } from 'react'
import { IoSearch } from 'react-icons/io5'
import { LuShoppingBag } from 'react-icons/lu'
import { MdFastfood } from "react-icons/md"
import { DataContext } from "../context/UserContext.jsx";
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { setInput, input, setIsCartOpen } = useContext(DataContext)
  const items = useSelector(state => state.cart)

  return (
    <div className='w-full flex justify-between items-center p-8 h-24'>
      
      <div className="h-16 w-16 flex justify-center items-center bg-white rounded-md shadow-xl">
        <MdFastfood className='w-8 h-8 text-green-500' />
      </div>

      <form
        className='flex items-center bg-white w-1/2 rounded-2xl gap-5 shadow-xl'
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className='h-8 w-20 text-green-500' />
        <input
          type="text"
          placeholder='Search items...'
          className='h-15 w-full outline-0 bg-white rounded-2xl font-bold'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Search food items"
        /> 
      </form>

      <div
        className="h-16 w-16 flex justify-center items-center rounded-md shadow-xl relative cursor-pointer"
        onClick={() => setIsCartOpen(true)}
      >
        <span className='absolute top-0 right-3 text-green-500 font-bold'>
          {items.length}
        </span>
        <LuShoppingBag className='w-8 h-8 text-green-500' />
      </div>
    </div>
  )
}

export default Navbar