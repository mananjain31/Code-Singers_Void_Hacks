import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Register = () => {
  return (
    <div className="inputFields ">
      <form>
        <div className="flex flex-col m-3 ml-auto">
          <label className="mb-1 uppercase">Name</label>
          <TextField
            id="outlined-basic"
            label="example@gmail.com"
            variant="outlined"
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">contact</labe>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">Email</labe>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 p-0">
          {" "}
          <div className="flex flex-col m-3 ml-auto">
            <labe className="mb-1 uppercase">Country</labe>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              style={{ background: "#DCDCDC" }}
            />
          </div>
          <div className="flex flex-col m-3 ml-auto">
            <labe className="mb-1 uppercase">State</labe>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              style={{ background: "#DCDCDC" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-0">
          {" "}
          <div className="flex flex-col m-3 ml-auto">
            <labe className="mb-1 uppercase">City</labe>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              style={{ background: "#DCDCDC" }}
            />
          </div>
          <div className="flex flex-col m-3 ml-auto">
            <labe className="mb-1 uppercase">Pincode</labe>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              style={{ background: "#DCDCDC" }}
            />
          </div>
        </div>

        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">Address</labe>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">Address</labe>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            style={{ background: "#DCDCDC" }}
          />
        </div>

        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">password</labe>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="mt-9 mb-9 w-full flex justify-center items-center">
          <button className="w-48  h-10  bg-indigo-600 rounded text-slate-50">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
