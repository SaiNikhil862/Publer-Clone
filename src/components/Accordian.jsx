import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Accordian = ({mode,id,q,a}) => {
    let [state,setState]=useState(false)
    let handleClick=()=>{
        setState(!state)
    }
    let h1Style={
        backgroundColor:'black',
        color:'white'
    }
  return (
    <div className='flex flex-col items-center gap-4 justify-center h-40 rounded-2xl ml-50 mt-20 shadow-xl/30 shadow-whitesmoke-500 w-300 transition-all delay-150'>
        <h1 className='text-[25px] w-250  mt-' onClick={handleClick}>{q} <span className='ml-250 block mt-[-30px]'>{state ?<FaXmark />:<FaPlus />}</span></h1>
        <p className='text-[17px] w-250'>
            {state? a : ""}
        </p>
    </div>
  )
}

export default Accordian