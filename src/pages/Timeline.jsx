import React, { useEffect } from "react";
import CommongNav from "components/nav/CommonNav";
import Card from "components/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_waste } from "Slices/wasteSlice";

const Timeline = () => {
  const navigate = useNavigate();

  const { ewaste, status: wsateStatus } = useSelector((state) => state.ewaste);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_waste());
  }, []);

  console.log(ewaste);

  return (
    <>
      <CommongNav />
      <div className="flex flex-col justify-center items-center">
        <div className="ml-auto mr-auto my-8">
          <button
            className="w-64 h-12 bg-purple-500 rounded-lg"
            onClick={() => navigate("/eWaste-upload")}
          >
            Upload eWaste
          </button>
        </div>
        <div className="grid grid-rows-4 gap-4">
          {ewaste &&
            ewaste.map((waste) => {
              return <Card waste={waste} key={waste._id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Timeline;
