
// Hooks are special functions that allow React features in function components

import { useState,useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






function App() {
  const [length, setLength] = useState(8)
    const[numberAllowed,setNumberAllowed]=useState(false)// this for to told that as we want to add number or not
  const[charAllowed,setCharAllowed]=useState(false)//this for to told that as we want to add char or not
     const[Password,setPassword]=useState()
const passRef=useRef(null) // -----this will give right to copy our clipboard text--------





     // we use there use callback react hook.
     // Dependency = value that the function/effect depends on
// React will recreate/run only if this value changes


//----------always remember that it memoize that old data-------
       const PasswordGenerator=useCallback(()=>{
        let pass=" " // step 2 pass will get that password

        let str="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz" 

        if ( numberAllowed) {
          str+="0123456789"
        }
        if ( charAllowed) {
          str+="~!@#$%^&*()-_=+[]{}\|;:',,<.>?"
        
       } 
      //we use loop for random value..so that depends on length...how amny times loop will run.
      for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random()*str.length+1)


      pass+=str.charAt(char) // step 1 set that char pass into pass
       
        
      }
           setPassword(pass) // setPassword will set that pass into step 3 AND MOST IMPORTANTLY IT WILL OPTIMIZE.
 
      
      }, [length,numberAllowed,charAllowed,setPassword] // they are dependency.(here gives method optimize memoization)..IF WE DID NTOT GIVE setPassword there..it will work smoothly..[.but if we give password here ..it will works as infinite loop]S

    )



const copyPasswordTOClipBroad=useCallback(()=>{
  // we use current? cause it might have null . to avoid this we use ?.
  passRef.current?.select();


  // WITH THIS WE CAN TOOK THAT PORTION THAT WE WANT TO SELECT.
  passRef.current?.setSelectionRange(0,69);
  window.navigator.clipboard.writeText(Password)
},
[PasswordGenerator])









 // ---------------(USE EFFECT HOOK)-------------------this HOOK we use for call password.------------------------------------------------------
useEffect(()=>{
  PasswordGenerator()
},[length,numberAllowed,charAllowed,PasswordGenerator])// here all dependencies tells us if there is any change ..re-run that







  return (
    <>
 <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-black-500 bg-amber-50 text-center my-3'> PASSWORD GENERATOR 
 <div className='flex shadow rounded-lg overflow-hidden mb-4 text-center'>

  <input type="text" 
  value={Password}
  className='outline-none w-full py-1 px-3 '
  placeholder='TYPE PASSWORD YOU MOTHERFUCKER!
'
  
  readOnly
  
  ref={passRef}// this pass reference to userRef.
  />
<button onClick={copyPasswordTOClipBroad} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-200">
  COPY
</button>
 </div>




 <div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input 
    type="range"  
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'



    // onChange fires when input value changes
// e.target.value gives current input
// setLength updates state and triggers re-render

// e contains all information about the event, like:
// e.target → the element that triggered the event (<input> in this case)
// e.target.value → the current value of that input

// setLength(e.target.value) → updates the state length with whatever the user typed.
// This triggers a re-render so your component reflects the new value
    onChange={(e)=>{setLength(e.target.value)}}// works on a event and that will change that target value 

     />

     <label >Length:{length}</label>
  </div>



  <div className='flex items-center gap-x-1'>

    <input type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onClick={()=>{
      setNumberAllowed((prev)=>!prev)// this will flip true and false.as per we wanna add number or not.
    }} />
    <label htmlFor="numberInput">Numbers</label>

  </div>
  <div className='flex items-center gap-x-1'>

    <input type="checkbox"
    defaultChecked={charAllowed}
    id="charInput"
    onClick={()=>{
      setCharAllowed((prev)=>!prev)// this will flip true and false.as per we wanna add number or not.
    }} />
    <label htmlFor="charInput">Characters</label>

  </div>
 </div>
  </div>

 
 
 
 
 
    </>
  )
}

export default App
