import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESSFULL,
  USER_CREATE_ERROR,
  USER_CREATE_SUCCESSFULL,
  USER_LOGOUT
} from "../../types/index";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESSFULL:
      localStorage.setItem("jwt", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload.user,
        authenticate: true,
        message: null,
        loading: false,
      };
    case USER_CREATE_SUCCESSFULL:
      return {
        ...state,
        message: action.payload,
      };
    case USER_LOGIN_ERROR:
    case USER_CREATE_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case USER_LOGOUT:
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      return{
        user: null,
        authenticate: null,
        message: null,
        loading: false,
      }
    default:
      return state;
  }
};
