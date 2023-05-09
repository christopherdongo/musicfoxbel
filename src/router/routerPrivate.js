import React from 'react';
import { Navigate } from 'react-router-dom'
//import UserContext from '../context/user/UserContext'


/* const RoutePrivate =({component:Component , ...props})=>{

    //usestate
    const token = localStorage.getItem('jwt');
    

    //UseEffec
    return(
        <Route {...props} 
        render={props =>  token? (
            <Component {...props} />
        ) :
        (
            redirect("/signin")
        ) 
    }
        
     />
        
    )
} */


const RoutePrivate = ({children})=>{
    const token = localStorage.getItem('jwt');

    if(!token) {
        return <Navigate to="/signin" />
    }

    return children

}


export default RoutePrivate

