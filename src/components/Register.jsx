import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { user_registration } from "Slices/userSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { isAuth, status } = useSelector((state) => state.user);

  const registerHandler = async (e) => {
    e.preventDefault();
    const address = { addressLine, pincode, locality, state, city };
    await dispatch(user_registration(name, contact, email, address, password));
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
          <label className="mb-1 uppercase">Name</label>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">contact</labe>
          <TextField
            id="outlined-basic"
            label="contact"
            variant="outlined"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">Email</labe>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 p-0">
          <div className="flex flex-col m-3 ml-auto">
            <labe className="mb-1 uppercase">Locality</labe>
            <TextField
              id="outlined-basic"
              label="Locality"
              variant="outlined"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              style={{ background: "#DCDCDC" }}
            />
          </div>
          <div className="flex flex-col m-3 ml-auto">
            <labe className="mb-1 uppercase">State</labe>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              value={state}
              onChange={(e) => setState(e.target.value)}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ background: "#DCDCDC" }}
            />
          </div>
          <div className="flex flex-col m-3 ml-auto">
            <labe className="mb-1 uppercase">Pincode</labe>
            <TextField
              id="outlined-basic"
              label="pincode"
              variant="outlined"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              style={{ background: "#DCDCDC" }}
            />
          </div>
        </div>

        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">Address</labe>
          <TextField
            id="outlined-basic"
            label="address"
            variant="outlined"
            value={addressLine}
            onChange={(e) => setAddressLine(e.target.value)}
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">Password</labe>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ background: "#DCDCDC" }}
          />
        </div>

        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-1 uppercase">Confirm Password</labe>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ background: "#DCDCDC" }}
          />
        </div>
        <div className="mt-9 mb-9 w-full flex justify-center items-center">
          <button
            className="w-48  h-10  bg-indigo-600 rounded text-slate-50"
            onClick={registerHandler}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
