import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoItem({ todo }) {
  const[isTodoEditable,setIsTodoEditable]=useState(false)
  const[todoMsg,setTodoMsg]=useState(todo.todo) // after edit the values will be change so we have to take that values from here


  const{ updateTodo, deleteTodo, toggleComplete}=useTodo()



//--------------- this part for update-----------------------
const editTodo=()=>{
  updateTodo(
    todo.id, //track every single todo ..so we can take edit on that particular one.
   {...todo,todo:todoMsg} // spread all values/props of todo(id,todo,complete) ..........then only change todo and give there my new edit message.
  )

setIsTodoEditable(false) // after update we tell that todo ...we have done whta we will to .. so after that consider that we can not do further change.
}




//-----------this part for toggle ----------
const toggleCompleted=()=>{
  toggleComplete(todo.id)
}




    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
