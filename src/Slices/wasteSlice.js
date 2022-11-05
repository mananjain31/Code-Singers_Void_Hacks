import { createSlice } from "@reduxjs/toolkit";
import api from "../api/apiService";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  waste: null,
  status: { type: STATUS.IDLE, message: null },
};

export const wasteSlice = createSlice({
  name: "waste",
  initialState,
  reducers: {
    uploadWaste(state, action) {},

    getWastes(state, action) {
      state.waste = action.payload;
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

export const { clearAllErrors, setStatus, uploadWaste, getWastes } =
  wasteSlice.actions;
export default wasteSlice.reducer;

export const upload_waste = (title, description, image) => {
  return async function uploadWasteThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      //   console.log(myForm);
      const { data } = await api.post(
        "uploadfiles",
        { title, description, image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(uploadWaste());
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

export const get_waste = () => {
  return async function getWastesThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const { data } = await api.get("signup");
      dispatch(getWastes(data));
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
