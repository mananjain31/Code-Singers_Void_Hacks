import React from "react";
import WasteUploadForm from "components/WasteUploadForm";

const WasteUpload = () => {
  return (
    <section className="w-full h-auto items-center">
      {/* <div className="grid grid-cols-2 gap-4 pl-48 pr-48"> */}
      {/* input fields column */}
      <div className="my-5">
        <h1 className="text-5xl text-center mb-8 text-indigo-500">
          Upload Waste
        </h1>
        {/* <p className="text-lg text-center mb-8">
          {compSwitch
            ? "Already have an account ? "
            : "Dont have any account ? "}
          <span className="text-indigo-800">
            <a
              onClick={() => setCompSwitch(!compSwitch)}
              className="cursor-pointer"
            >
              {compSwitch ? "Login" : "Register"}
            </a>
          </span>
        </p> */}
        <WasteUploadForm />
      </div>
    </section>
  );
};

export default WasteUpload;
