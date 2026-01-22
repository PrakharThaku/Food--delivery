import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import {decrementQty, incrementQty, removeItem } from '../redux/cardSlice';
const CartCard = ({name,image,price,id,qty}) => {
  let dispatch = useDispatch()
  return (
    <div className='w-full h-32 bg-slate-200 flex shadow-xl'>
      <div className="w-[70%] h-full  flex gap-5">
        <div className="w-[60%] h-full overflow-hidden p-2 rounded-b-lg" >
          <img className='object-cover' src={image} alt="" />
        </div>
        <div className="w-[40%] flex flex-col gap-2 ">
            <div className="text-lg text-grey-600 font-semibold">{name}</div>
            <div className="w-28 h-14 bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400">
                <button className='w-8 h-full bg-white flex justify-center items-center text-green-400' onClick={()=> { qty? dispatch(decrementQty({id})):1 }}>-</button>
                <span className='w-10 h-full bg-slate-300 flex justify-center items-center text-green-400'>{qty}</span>
                <button className='w-8 h-full bg-white flex justify-center items-center text-green-400' onClick={()=>dispatch(incrementQty({id}))}>+</button>
            </div>
        </div>
      </div>
      <div className=" flex flex-col items-end justify-start w-[30%] gap-6 p-4">
        <span className='text-xl text-green-400 font-semibold '>{price}-</span>
        <RiDeleteBin6Fill className='w-8 h-8 text-red-400 cursor-pointer' onClick={()=>dispatch(removeItem(id))}/>
      </div>
    </div>
  ); 
}

export default CartCard;










