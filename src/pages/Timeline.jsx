import React from "react";
import CommongNav from "components/nav/CommonNav";
import Card from "components/Card";
import { useNavigate } from "react-router-dom";

const Timeline = () => {
  const navigate = useNavigate();

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
          <Card />
        </div>
      </div>
    </>
  );
};

export default Timeline;
