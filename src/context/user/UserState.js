import React, {useReducer} from 'react';
/*context*/
import UserContext from './UserContext'
/*reducer*/
import UserReducer from './UserReducer' 
/*types*/
import {USER_LOGIN_SUCCESSFULL,USER_LOGIN_ERROR, USER_CREATE_SUCCESSFULL, USER_CREATE_ERROR} from '../../types/index' 

import ClienteAxios2 from '../../apis/service'


const initial_state={
    user:null || JSON.parse(localStorage.getItem('user')),
    favorite:null,
    message:null,
    token: localStorage.getItem('jwt'),
    loading:true,
    authenticate:null
}


export const GlobalUserState = ({children})=>{

    const [state, dispatch] = useReducer(UserReducer, initial_state)

    /*function para iniciar sesscion*/
    const FunctionLogin = async (data)=>{

        const params = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try{
            const result = await ClienteAxios2.post('/api/signin', data, params)
            dispatch({
                type:USER_LOGIN_SUCCESSFULL,
                payload:result.data
            })
        }catch(err){
            dispatch({
                type:USER_LOGIN_ERROR,
                payload:err
            })
        }
    }
 /*registrar*/
    const UserRegister =async (data)=>{
        
        try{
            const result = await ClienteAxios2.post('/api/signup', data)
            console.log(result)

            dispatch({
                type:USER_CREATE_SUCCESSFULL,
                payload:result.data.message
            })
        }catch(err){
            console.log(err.request)
            dispatch({
                type:USER_CREATE_ERROR,
                payload:err.request.response
            })
        }

    }

    return(
        <UserContext.Provider value={{
            /*state*/
            user:state.user,
            favorite:state.favorite,
            message:state.message,
            loading:state.loading,
            token:state.token,
            authenticate:state.authenticate,
             /*function*/
             FunctionLogin,
             UserRegister
        }}>
           {children}
        </UserContext.Provider>
    )
}










