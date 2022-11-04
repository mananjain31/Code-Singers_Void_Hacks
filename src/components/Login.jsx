import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <div className="inputFields ">
      <form>
        <div className="flex flex-col m-3 ml-auto">
          <label className="mb-1 uppercase">Email</label>
          <TextField
            id="outlined-basic"
            label="example@gmail.com"
            variant="outlined"
            style={{ background: "#DCDCDC" }}
          />
        </div>

        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">Password</labe>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            style={{ background: "#DCDCDC" }}
          />
        </div>

        <div className="mt-9 mb-9 w-full flex justify-center items-center">
          <button className="w-40  h-10 bg-indigo-600 rounded text-slate-50">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
