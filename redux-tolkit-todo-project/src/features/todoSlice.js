
//----------------that is our mainly reducer ------------------------


import { createSlice,nanoid } from "@reduxjs/toolkit";
// nanoid it generate new id's

const initialState={
    todos:[{id:1,Text:"Hello coder"}]
}



export const todoSlice=createSlice({
    // these props in  redux toolkit..and they will show in browser.
    name:'todo',
    initialState, // this value i write in above.



    reducers:{
        // props and function in here

        // in context api we always declare function but not there  defecation.
        // in here we get both.


        // in addTodo we have two access thing---> state and action.

        // state --->will give initial value access (which are now)
        //action---->for del something we need id...that is i found from action.
        addTodo:(state,action)=>{
             const todo={
                id:nanoid(),
                Text:action.payload.Text // payload is a obj[it can have id,email,text]
            }
            state.todos.push(todo)
        },


        removeTodo:(state,action)=>{
            // that mean filter out that which one is not matching and give rest id.
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        }


        // can add feature like updateTodo.
    }


})



// we update  State through  functionality so we needed to work i=with (addTodo,removeTodo) as individual.
export const {addTodo,removeTodo}=todoSlice.actions






// store.js says-- this make sure which are register inside me . i will take those value from reducer and update
// so mainly list are there.
export default todoSlice.reducer