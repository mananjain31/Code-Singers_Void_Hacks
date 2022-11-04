import { createSlice } from "@reduxjs/toolkit";
import api from "../api/apiService";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  isAuth: false,
  user: null,
  status: { type: STATUS.IDLE, message: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },
    userRegister(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },
    setStatus(state, action) {
      state.status.type = action.payload.type;
      state.status.message = action.payload.message;
    },
    clearAllErrors(state, action) {
      state.status = action.payload;
    },
  },
});

export const { clearAllErrors, setStatus, userLogin, userRegister } =
  userSlice.actions;
export default userSlice.reducer;

export const user_login = (email, password) => {
  return async function userLoginThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const { data } = await api.get("");
      dispatch(userLogin());
      dispatch(
        setStatus({
          type: STATUS.IDLE,
          message: "User Login Successfully",
        })
      );
    } catch (error) {
      if (error) {
        dispatch(
          setStatus({
            type: STATUS.ERROR,
            message: error.response.data.message,
          })
        );
      }
    }
  };
};

// clear Users
export function clear_all_errors() {
  return async function clearErrorsThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.Idle, message: null }));
  };
}
