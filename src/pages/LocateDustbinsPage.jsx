import CommongNav from "components/nav/CommonNav";
import { respPX } from "constants/styles";
import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const LocateDustbinsPage = () => {
  return (
    <>
      <CommongNav />
      <main className={`${respPX} py-6`}>
        <h1 className="text-3xl">Locate Dustbins </h1>
        <p className="text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quia, voluptas quae voluptatem quibusdam
          necessitatibus voluptates quidem quos voluptatibus. Quisquam
          voluptatum, quod, quia, voluptas quae voluptatem quibusdam
        </p>
      </main>
    </>
  );
};

export default LocateDustbinsPage;
