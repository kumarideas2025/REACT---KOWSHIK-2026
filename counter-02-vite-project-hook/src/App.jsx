import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]  = useState(5)// this is we set aas default.
// variable---> counter and function----> setCounter . variable update the function.

//  let counter=5

 const addValue=() =>{
  console.log("Clicked",counter);
  counter=counter+1
  setCounter(counter)
 }


  const removeValue=() =>{
   counter=counter-1
  setCounter(counter)
    console.log("Clicked",counter);

 }


  return (
    <>
     <h1>Coffee time with Kowshik </h1>
     <h3>Counter value:{counter}</h3>


     <button onClick ={addValue}>add value{counter}</button>
     <br />
     <button onClick={removeValue}>Remove value{counter}</button>
     <p> footer:{counter}</p>
    </>
  )
}

export default App

// Hook is a special function that lets you use React features inside functional components — without writing a class.
// change in one counter changes al others counter there ...