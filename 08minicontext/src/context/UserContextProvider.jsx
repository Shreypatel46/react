import React from 'react';
import UserContext  from "./UserContext"
// top level fragments that need keep here so that they can access
// just like in layout we pass header n footer as it is provider should  also take children as it is as params
const UserContextProvider= ({children})=>{
    const [user,setUser]= React.useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
         {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider