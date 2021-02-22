import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESSFULLY,
  USER_CREATE_ERROR,
  USER_CREATE_SUCCESSFULL,
  USER_LOGOUT,
  CLEAN_ALERT,
} from "../../types/index";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case USER_CREATE_SUCCESSFULL:
      return {
        ...state,
        message: action.payload,
      };
    case USER_LOGIN_SUCCESSFULLY:
      localStorage.setItem("jwt", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        user:JSON.parse(localStorage.getItem("user")),
        authenticate: true,
        message: null,
        loading: false,
      };
    case USER_LOGIN_ERROR:
    case USER_CREATE_ERROR:
      return {
        ...state,
        message: action.payload.message,
        errorCode: action.payload.code
      };
    case USER_LOGOUT:
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      return {
        user: null,
        authenticate: null,
        message: null,
        loading: false,
      };
    case CLEAN_ALERT:
      return{
        ...state,
        message:null,
        errorCode:null
      }

    default:
      return state;
  }
};
