import React from "react";
import WasteUploadForm from "components/WasteUploadForm";
import CommongNav from "components/nav/CommonNav";

const WasteUpload = () => {
  return (
    <>
      <CommongNav />
      <section className="w-full h-auto items-center">
        <div className="my-5">
          <h1 className="text-5xl text-center text-indigo-500">Upload Waste</h1>
          <WasteUploadForm />
        </div>
      </section>
    </>
  );
};

export default WasteUpload;
