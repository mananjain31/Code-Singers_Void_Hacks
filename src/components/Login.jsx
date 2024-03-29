import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { user_login } from "Slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, status, user } = useSelector((state) => state.user);

  const loginHandler = async (e) => {
    e.preventDefault();

    await dispatch(user_login(credentials, password));
    alert("Logged In Succesfully");
    navigate("/");
  };

  useEffect(() => {
    if (status.type === "error") {
      alert(status.message);
    }
  }, []);

  return (
    <div className="inputFields flex justify-center ">
      <form>
        <div className="flex flex-col mb-6 ml-auto">
          <label className="mb-2 uppercase">Email</label>
          <input
            name="credentials"
            value={credentials}
            onChange={(e) => setCredentials(e.target.value)}
            className="w-80 h-11 rounded-lg bg-slate-100 text-black-600 p-2"
            placeholder="example@gmail.com or 7894556123"
          />
        </div>

        <div className="flex flex-col m-3 ml-auto">
          <label className="mb-2 uppercase">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-80 h-11 rounded-lg bg-slate-100 text-black-600 p-2"
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
