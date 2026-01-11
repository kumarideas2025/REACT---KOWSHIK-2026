import { createContext,useContext } from "react";
export const TodoContext=createContext({
    // values
    todos:[
        
        
        {   id:1, // as a unique key ...so that todoItems..loop can asses it.
    todo:"todo message", // this todo comes from todoItem....useState(todo.todo)...
    completed:false,
            }

    ],
    //method only not defined any of this here. i did it in app.jsx
 addTodo:(todo)=>{},
 updateTodo:(id,todo)=>{},
 deleteTodo:(id)=>{},
 toggleComplete:(id)=>{}
})


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider