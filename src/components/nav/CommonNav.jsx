import { Button } from "@mui/material";
import NavWrapper from "components/wrappers/NavWrapper";
import React from "react";

const CommongNav = () => {
  //   const { isAuth } = useSelector((state) => state);
  const isAuth = false;
  const list = [];

  list.push(
    isAuth
      ? {
          component: (
            <Button variant="contained" color="inherit≠">
              Logout
            </Button>
          ),
          to: "/logout",
        }
      : {
          component: (
            <Button variant="contained" color="inherit">
              Login / Register
            </Button>
          ),
          to: "/login-register",
        }
  );

  return <NavWrapper list={list} />;
};

export default CommongNav;
