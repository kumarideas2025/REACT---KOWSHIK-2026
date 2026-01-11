import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoItem } from './components'
import {TodoForm} from './components'




function App() {
      const[todos,setTodos]=useState([])

      const addTodo=(todo)=>{
        //we found (prev)old array and from this array we build a new array.and add old and new both array
        // we get old todos values and ... with this we spread all values.
        setTodos((prev)=>[{id:Date.now(),...todo},...prev]) // here 1st one is obj spread and 2nd one is array spread.
      }







const updateTodo=(id,todo)=>{
          setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
      }




const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
}




const toggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?
  {...prevTodo, completed: !prevTodo.completed}:prevTodo)
)
}





//---------local storage that learn here-(working on browser not in server site--------------
useEffect(()=>{
   const todos= JSON.parse(localStorage.getItem("todos")) //that todos is key. we do JSON format cause localStorage give values in string format.

if(todos && todos.length>0){
      setTodos(todos)
}
  },[])


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos)) // another method to convert String into JSON.
  },[todos])

// from inside ereurn provider i got todos and that change value i useSate and then that value set in localStorage.


  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
 <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                      < TodoForm/>

                    </div>



                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => ( // if we use {}..here we have to use a return here.. so we use ( ) instead.
            <div key={todo.id} 
            className="w-full">
    <TodoItem todo={todo} />
  </div>
))}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
