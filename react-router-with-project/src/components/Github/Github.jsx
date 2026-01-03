import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data=useLoaderData()




//--------------this is oneway--------------------------
//     const[data,setData]=useState([])
//     useEffect(()=>{
//             fetch('https://api.github.com/users/kumarideas2025')
//             .then(res=>res.json())
//             .then(data=>{
//                 console.log(data);
//                 setData(data)
//             })
//     },[])
// cause we use loader to call api..




  return (
    <div
    className='text-center m-4 bg-gray-600 text-yellow p-4 text-3xl'>
      GITHUB FOLLOWERS :{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github


//----another way--------using loader to call api----------------------
export const githubInfoLoader=async()=>{
  const res= await fetch('https://api.github.com/users/kumarideas2025')
  return res.json()
}
