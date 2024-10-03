import  { useEffect, useRef, useState } from 'react'
import todo_icon from './assets/list_todo_icon_177852.png'
import TodoItems from './todoItems'

const Todo = () => {

    const inputRef = useRef();
    const [todoList , setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []); 

// ......add button.......

    const add =()=>{
    const inputText = inputRef.current.value.trim() ;

    if(inputText === ''){
      return null;
    }

    const newTodo ={
      id: Date.now(),
      text: inputText,
      isComplete:false,
    }
    setTodoList((prev)=> [...prev,newTodo]);
    inputRef.current.value ="";
    
  }
// ...Todo.....delete button........
const  deleteList = (id)=>{
      setTodoList((prevTodos)=>{
      return prevTodos.filter((todo)=> todo.id !== id);
    })  
  }
  
// ....todo ..toggle ......

const toggle = (id)=>{
  setTodoList((prevTodos)=>{
    return prevTodos.map((todo)=>{
      if(todo.id === id ){
        return {...todo,  isComplete: !todo.isComplete}
      }
      return todo;
    })
  })
}

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList))
  
},[todoList])



  return (
    <> 
    <div className='bg-purple-300 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] max-h-28  overflow-hidden rounded-xl '>
      
      {/* ......title...... */}

      <div className=' flex items-center mt-7 gap-2'>
        <img  className='w-8' src={todo_icon} alt="icon" />
        <h1 className='text-3xl font-semibold'>To-do  List</h1>
      </div>

      {/* .....input box..... */}

      <div className='flex items-center my-7
      bg-cyan-100 rounded-full min-w-10 '>
        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-100 ' type="text" placeholder='Add your task' ref={inputRef} />
        <button className='border-none rounded-full cursor-pointer  bg-cyan-200 w-20 h-14 text-white  min-w-14' onClick={add}>ADD +</button>
      </div>

      {/* .....Todo list ..... */}

      <div>
        {todoList.map((item ,index)=>{
          return <TodoItems key={index} text={item.text} id={item.id}isComplete={item.isComplete} deleteList={deleteList}
           toggle={toggle}/>
        })}
      </div>
    </div>
    </>
  )
} 

export default Todo