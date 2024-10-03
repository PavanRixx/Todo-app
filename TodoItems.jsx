import React from 'react'
import delet_icon from './assets/delete.png'
import tick from './assets/tick.svg'
import not_tick from './assets/circle.svg'
const TodoItems = ({text,id,isComplete,deleteList,toggle}) => {

  

  
  // console.log(text);
  
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='w-full flex flex-1 items-center' onClick={()=>{toggle(id)}}>
            <img className='w-7 cursor-pointer left-1 items-center' src={isComplete ? tick : not_tick} alt="" />
            <p className='ml-4 text-xl'>{text}</p>
        </div>
        <img className='w-5 cursor-pointer left-1 text-slate-600' src={delet_icon} alt="delete icon" onClick={()=>{deleteList(id)}} />
    </div>
  )
}

export default TodoItems