import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)  


    // this part tol that if he/she did not have acc..
       if(!user)
         return <div>PLease Login </div>
        
        return <div>Welcome {user.username}</div> // if we had then welcome.
}

export default Profile
