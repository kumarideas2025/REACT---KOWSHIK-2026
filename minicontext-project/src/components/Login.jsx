import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

// to fetch value in UserContext we use useContext

function Login() {

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')



    //------------this part for sending data--------------
    //setUser and user we take as provider value in UserContextProvider.

        const {setUser}=useContext(UserContext) // useContext give the permission to use SetUser. useContext have context like:login,profile.....
        const handleSubmit=(e)=>{
            e.preventDefault()
            setUser({username,password})
        }


  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=> 
      setUsername(e.target.value)}
      placeholder='username'/>


      <input type="text" 
       value={password}
      onChange={(e)=> 
      setPassword(e.target.value)}
      placeholder='password'/>

     <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
