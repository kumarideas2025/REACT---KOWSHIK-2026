//-----------------here we make sure we use dispatch---------------

import React, {useState} from 'react'

// react ware-up.
import {useDispatch} from 'react-redux'

// for this we use individual reducers export
import {addTodo} from '../features/todoSlice' 





function AddTodo() {
  // we add something on function  with the help of dispatch.
    const [input, setInput] = useState('')
    const dispatch = useDispatch()



    const addTodoHandler = (e) => {

        // this avoid form to directly submit.
        e.preventDefault()

        // dispatch use a reducers to store value in store.
        dispatch(addTodo({ Text: input }))


        setInput('')
    }



  return (//onSubmit will works with handler function after i tap the form.
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo




















//-------------how control compenet works----


//            (1) Initial State
//         input = ""

//                │
//                ▼
//       value={input}
//    (State → Input Field)
//                │
//                ▼
//         ┌────────────────┐
//         │   Input Box    │
//         │   (UI Screen)  │
//         └────────────────┘
//                │
//    User types "Hello"
//                │
//                ▼
//      onChange Event Fires
//                │
//                ▼
//  setInput(e.target.value)
//    (UI → State Update)
//                │
//                ▼
//         input = "Hello"
//                │
//                ▼
//    React Re-render Component
//                │
//                ▼
//       value={input}
//    (Updated State → UI)
//                │
//                ▼
//         ┌────────────────┐
//         │ Input shows    │
//         │     "Hello"    │
//         └────────────────┘
