// this file will give permission to all who have inside provider to use............user and setUser.


import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{ // children is a generic name here.  
    const [user,setUser]=React.useState(null) //we have to return a value so did that.
    return(

        
            // in provider we have to give value as prop..we can pass there as obj......and this info can use by all component which are inside provider.
            <UserContext.Provider value={{user,setUser}} >

           



            {/* means here it have [children = <App />] */}
            {/* so we can say it will render app component ....if we did not gave children here...nothing is rendering..so we ddi not see login ,profile,app. */}
            {/* provider only wrapper..UI will show by children by rendering */}
            {children}






            </UserContext.Provider>
    )

}

export default UserContextProvider