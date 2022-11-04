import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const LoginRegisterPage = () => {
  const [compSwitch, setCompSwitch] = useState(false);
  return (
    <section className="w-screen h-screen items-center">
      <div className="grid grid-cols-2 gap-4 pl-48 pr-48">
        {/* input fields column */}
        <div className="">
          <h1 className="text-5xl text-center mb-8 text-indigo-500">
            {compSwitch ? "Login" : "Register"}
          </h1>
          <p className="text-lg text-center mb-8">
            {compSwitch
              ? "Dont have any account ? "
              : "Already have an account ? "}
            <span className="text-indigo-800">
              <a
                onClick={() => setCompSwitch(!compSwitch)}
                className="cursor-pointer"
              >
                {compSwitch ? "Register" : "Login"}
              </a>
            </span>
          </p>
          {compSwitch ? <Login /> : <Register />}
        </div>

        {/* image column */}
        <div className="flex justify-center items-center">
          <img
            src={compSwitch ? "logo192.png" : "logo512.png"}
            alt="loginImg"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginRegisterPage;
