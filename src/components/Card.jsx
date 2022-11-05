import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import { useDispatch } from "react-redux";
import { sent_mail } from "Slices/wasteSlice";

const Card = ({ waste }) => {
  const dispatch = useDispatch();

  const mailHandler = (sellerId, title) => {
    dispatch(sent_mail(sellerId, title));
    alert("Mail Sent Seccesfully");
  };

  return (
    <div className="w-96 h-auto mx-5 bg-white p-2 rounded-xl shadow-lg shadow-gray-500/40">
      {/* card Head */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl mb-2 text-green-500">{waste.user.name}</h1>
          <p className="m-2">{waste.title}</p>
        </div>

        <button
          onClick={() => mailHandler(waste.user._id, waste.title)}
          className="text-xl mb-2 mr-2"
        >
          <ContactPhoneOutlinedIcon
            style={{ width: "150%" }}
          ></ContactPhoneOutlinedIcon>
        </button>
      </div>

      {/* </Stack> */}
      <Divider className="my-4" />
      {/* card Mid */}
      <div className="flex justify-center">
        <img
          src={waste.image}
          alt="wasteImage"
          className="w-auto h-auto m-2"
        ></img>
      </div>
      <Divider className="my-4" />
      {/* Card Footer */}
      <div>
        <p className="m-2">{waste.description}</p>
      </div>
    </div>
  );
};

export default Card;
