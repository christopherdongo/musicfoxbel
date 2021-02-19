import React,{useContext} from 'react';
import {Route, Redirect } from 'react-router-dom'
/*context*/
//import UserContext from '../context/user/UserContext' 

const RoutePrivate =({component:Component , ...props})=>{
    //context
    //const usercontext = useContext(UserContext);
    //const {user,token, authenticate, loading} = usercontext;

    return(
        <Route {...props} 
        render={props => localStorage.getItem('jwt') ? (
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