import { respPX } from "constants/styles";
import React from "react";
import { Link } from "react-router-dom";
import Void from "assets/Void.png";

const NavWrapper = ({ list }) => {
  return (
    <nav
      className={`${respPX} py-4 flex gap-2 items-center justify-between bg-[rgb(73,180,35)] sticky top-0 z-10`}
    >
      <h1 className="text-3xl">
        <img src={Void} alt="logo" />
      </h1>
      {list.map((item, index) => {
        return (
          <Link key={index} to={item.to}>
            {item.component}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavWrapper;
