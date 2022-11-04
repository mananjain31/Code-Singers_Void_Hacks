import React from "react";

const LoginRegisterPage = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
        {/* input fields column */}
        <div>
          <h1>Login</h1>
          <p>
            Dont have any account ? <span>Register</span>
          </p>
          <div className="inputFields"></div>
        </div>

        {/* image column */}
        <div></div>
      </div>
    </section>
  );
};

export default LoginRegisterPage;
