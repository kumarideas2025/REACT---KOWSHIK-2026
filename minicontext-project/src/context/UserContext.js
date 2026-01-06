import React from 'react'

const UserContext= React.createContext() // global  data container build by----userContext

export default UserContext;

// context will give a provider... when we wrap with this.


//inside this all components can get access of global userContext.
{/* <UserContext> 

</UserContext> */}
