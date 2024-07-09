import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)    
    return(                                        // WE NEED TO USE VALUE TO TELL WHICH DATA HAS ACCESSS
        <>                                             
            <UserContext.Provider value={{user,setUser}}>      
                {children}                            
            </UserContext.Provider> 
        </>
    )
}

export default UserContextProvider;