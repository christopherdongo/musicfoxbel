import React from 'react';
import {Route, Redirect } from 'react-router-dom'



const RoutePrivate =({component:Component , ...props})=>{

    //usestate
    const token = localStorage.getItem('jwt');

    //UseEffec
    return(
        <Route {...props} 
        render={props =>  token? (
            <Component {...props} />
        ) :
        (
            <Redirect to="/signin" />
        ) 
    }
        
     />
        
    )
}

export default RoutePrivate