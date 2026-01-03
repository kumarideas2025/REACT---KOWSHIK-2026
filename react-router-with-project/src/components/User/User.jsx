// this is dynamic routing..which we call
//  by http://localhost:5181/User/kowshik....there 
// id and give the id value in user:{userid}..fromat




import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const{userid}=useParams()
  return (
    <div className='bg-gray-900 text-red-300 text-3xl p-4'>
      User:{userid}
    </div>
  )
}

export default User
