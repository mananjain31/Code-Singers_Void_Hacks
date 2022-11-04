import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Card = () => {
  return (
    <div className="w-64 h-auto mx-5 bg-white p-2 rounded-xl shadow-lg shadow-gray-500/40">
      {/* card Head */}
      <div className="flex justify-between">
        <h1 className="text-xl mb-2 text-green-500">Aman Pandagre</h1>
        <a href="tel:" className="text-xl mb-2">
          <img src="logo192.png" alt="call" className="w-8"></img>
        </a>
      </div>

      {/* </Stack> */}
      <Divider className="my-4" />
      {/* card Mid */}
      <div className="flex justify-center">
        <img
          src="profile.jpg"
          alt="wasteImage"
          className="w-auto h-auto m-2"
        ></img>
      </div>
      {/* Card Footer */}
    </div>
  );
};

export default Card;
