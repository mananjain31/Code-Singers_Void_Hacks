import { respPX } from "constants/styles";
import React from "react";
import { Link } from "react-router-dom";
import Void from "assets/Void.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Icon, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const NavWrapper = ({ list }) => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);
  const renderList = () =>
    list.map((item, index) => {
      return (
        <Link key={index} to={item.to}>
          <span className="font-bold text-lg lg:inline-block hidden">
            {item.component}
          </span>
        </Link>
      );
    });
  const renderBurgerList = () => (
    <aside className="bg-[rgb(73,180,35)] fixed h-full right-0 top-0">
      <div className="flex flex-col-reverse justify-end h-full gap-10 px-16 py-16">
        {list.map((item, index) => (
          <Link key={index} to={item.to}>
            <span className="font-bold text-lg">{item.component}</span>
          </Link>
        ))}
        <div className="absolute top-5 right-5">
          <IconButton onClick={() => setBurgerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </aside>
  );
  return (
    <nav
      className={`${respPX} py-4 flex gap-2 items-center justify-between bg-[#8DE78D] sticky top-0 z-10`}
    >
      <h1 className="text-3xl">
        <img src={Void} alt="logo" />
      </h1>
      {burgerOpen ? renderBurgerList() : renderList()}
      {!burgerOpen && (
        <div className="lg:hidden">
          <IconButton onClick={() => setBurgerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      )}
    </nav>
  );
};

export default NavWrapper;
