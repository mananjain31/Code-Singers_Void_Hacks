import { Button } from "@mui/material";
import NavWrapper from "components/wrappers/NavWrapper";
import React from "react";
import { useSelector } from "react-redux";

const CommongNav = () => {
  const { isAuth } = useSelector((state) => state.user);
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
      component: "Food Collectors",
      to: "/food-collectors",
    },
    {
      component: "Waste Collectors",
    },
    {
      component: "E-Waste Timeline",
      to: "/eWaste-timeline",
    },
  ];

  list.push(
    isAuth
      ? {
          component: (
            <button
              className="border-4 border-black px-2 py-1 text-lg w-full"
              onClick={() => {}}
            >
              Logout
            </button>
          ),
        }
      : {
          component: (
            <button className="border-4 border-black px-2 py-1 text-lg w-full">
              Login / Register
            </button>
          ),
          to: "/login-register",
        }
  );

  return <NavWrapper list={list} />;
};

export default CommongNav;
