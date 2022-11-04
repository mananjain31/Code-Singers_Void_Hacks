import { Button } from "@mui/material";
import NavWrapper from "components/wrappers/NavWrapper";
import React from "react";

const CommongNav = () => {
  //   const { isAuth } = useSelector((state) => state);
  const isAuth = false;
  const list = [
    {
      component: "Locate Dustbin",
      to: "/locate-dustbins",
    },
    {
      component: "Waste Category",
      to: "/waste-category",
    },
    {
      component: "Food Colectors",
    },
    {
      component: "Waste Collectors",
    },
    {
      component: "E-Waste Timeline",
    },
  ];

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
            <button className="border-4 border-black px-2 py-1 text-lg">
              Login / Register
            </button>
          ),
          to: "/login-register",
        }
  );

  return <NavWrapper list={list} />;
};

export default CommongNav;
