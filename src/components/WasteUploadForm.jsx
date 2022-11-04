import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WasteUploadForm = () => {
  const [image, setImage] = useState();
  const [previewImage, setpreviewImage] = useState("logo512.png");
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const uploadHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
  };

  const dispatch = useDispatch();

  const WasteDataChange = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setpreviewImage(reader.result);
          setImage(reader.result);
        }
      };
    }
  };

  return (
    <div className="inputFields flex justify-center ">
      <form>
        <div className="flex flex-col m-3 ml-auto">
          <img
            src={previewImage}
            alt="preview image"
            className="w-44 h-15 ml-auto mr-auto my-5"
          ></img>
          <input
            id="icon-button-file"
            type="file"
            name="avatar"
            accept="image/*"
            style={{ display: "none" }}
            onChange={WasteDataChange}
          />
          <label
            htmlFor="icon-button-file"
            className=" w-40 h-8 rounded bg-green-800 mb-2 uppercase cursor-pointer text-center text-white ml-auto mr-auto"
          >
            upload
          </label>
        </div>

        <div className="flex flex-col mb-6 ml-auto">
          <label className="mb-2 uppercase">Title</label>
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-80 h-11 rounded-lg bg-green-200 text-black-600 p-2"
          />
        </div>
        <div className="flex flex-col m-3 ml-auto">
          <labe className="mb-2 uppercase">Description</labe>
          <input
            type="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-80 h-11 rounded-lg bg-green-200 text-black-600 p-2"
          />
        </div>
        <div className="mt-9 mb-9 w-full flex justify-center items-center">
          <button
            className="w-40  h-10 bg-indigo-600 rounded text-slate-50"
            onClick={uploadHandler}
          >
            Upload Waste
          </button>
        </div>
      </form>
    </div>
  );
};

export default WasteUploadForm;