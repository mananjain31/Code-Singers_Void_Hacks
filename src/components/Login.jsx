import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { user_login } from "Slices/userSlice";

const Login = () => {
  const [credentials, setCredentials] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { isAuth, status, user } = useSelector((state) => state.user);

  const loginHandler = async (e) => {
    e.preventDefault();

    await dispatch(user_login(credentials, password));
  };

  useEffect(() => {
    if (status.type === "error") {
      alert(status.message);
    }
  }, []);

  return (
    <div className="inputFields ">
      <form>
        <div className="flex flex-col m-3 ml-auto">
          <label className="mb-1 uppercase">Email</label>
          <TextField
            id="outlined-basic"
            label="example@gmail.com / 00000000"
            variant="outlined"
            value={credentials}
            onChange={(e) => setCredentials(e.target.value)}
            style={{ background: "#DCDCDC" }}
          />
        </div>

        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">Password</labe>
          <TextField
            id="outlined-adornment-password"
            label="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ background: "#DCDCDC" }}
          />
        </div>

        <div className="mt-9 mb-9 w-full flex justify-center items-center">
          <button
            className="w-40  h-10 bg-indigo-600 rounded text-slate-50"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
