import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams() 
    return( 
        <div>User:{userid}</div>   // THIS IS HOW WE TAKE DYNAMIC DATA
    )
}

export default User