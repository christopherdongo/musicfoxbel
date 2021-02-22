import React, { useReducer } from "react";
/*context*/
import UserContext from "./UserContext";
/*reducer*/
import UserReducer from "./UserReducer";
/*types*/
import {
  USER_LOGIN_SUCCESSFULLY,
  USER_LOGIN_ERROR,
  USER_CREATE_SUCCESSFULL,
  USER_CREATE_ERROR,
  USER_LOGOUT,
  CLEAN_ALERT,
} from "../../types/index";
/**/
import ClienteAxios2 from "../../apis/service";
/*message*/

const initial_state = {
  token: localStorage.getItem("jwt"),
  user: JSON.parse(localStorage.getItem('user')),
  favorite: null,
  message: null,
  loading: true,
  authenticate: null,
  errorCode:null
};

export const GlobalUserState = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initial_state);

  /*function para iniciar sesscion*/
  const FunctionLogin = async (data) => {
    try {
      const result = await ClienteAxios2.post("/api/signin", data);
      dispatch({
        type: USER_LOGIN_SUCCESSFULLY,
        payload: result.data, 
      });
    } catch (err) {
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: {
          message:err.response.data.message,
          code: err.response.status
        }
      });
    }
    //LIMPIAR MENSAJE
    setTimeout(() => {
      dispatch({
        type: CLEAN_ALERT,
      });
    }, 3000);
  };
  /*authenticated*/

  /*registrar*/
  const UserRegister = async (data) => {
    try {
      const result = await ClienteAxios2.post("/api/signup", data);
      console.log(result)
      dispatch({
        type: USER_CREATE_SUCCESSFULL,
        payload: {
          message:result.data.message,
          code:result.status
        }
      });
    } catch (err) {
      dispatch({
        type: USER_CREATE_ERROR,
        payload: {
          message: err.response.data.message, 
          code: err.response.status
        }
      });
    }
    //LIMPIAR MENSAJE
    setTimeout(() => {
      dispatch({
        type: CLEAN_ALERT,
      });
    }, 3000);
  };

  const LogoutUser = () => {
    dispatch({
      type: USER_LOGOUT,
    });
  };

  return (
    <UserContext.Provider
      value={{
        /*state*/
        user: state.user,
        favorite: state.favorite,
        message: state.message,
        loading: state.loading,
        authenticate: state.authenticate,
        errorCode: state.errorCode,
        token: state.token,
        /*function*/
        FunctionLogin,
        UserRegister,
        LogoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
