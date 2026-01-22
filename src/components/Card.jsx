import React from 'react'
import { GiChickenOven } from 'react-icons/gi'
import { LuLeafyGreen } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cardSlice'

const Card = ({ id, name, image, price, type }) => {
  const dispatch = useDispatch()

  const handleAddItem = () => {
    dispatch(addItem({ id, name, image, price, type,qty:1 }))
  }

  return (
    <div className='w-72 h-96 bg-white p-4 flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'>
      <div className="w-full h-56 overflow-hidden rounded-b-lg">
        <img src={image} alt={name} className='object-cover w-full h-full' />
      </div>

      <div className="text-2xl font-semibold">{name}</div>

      <div className="w-full flex justify-between items-center">
        <div className="text-lg text-green-500 font-bold">₹{price}</div>

        <div className="flex items-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      <button
        onClick={handleAddItem}
        className='w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-200 cursor-pointer'
      >
        Add to Dish
      </button>
    </div>
  )
}

export default Card
