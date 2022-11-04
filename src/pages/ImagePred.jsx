import api from "api/apiService";
import React from "react";

const ImagePred = () => {
  const [val, setVal] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target.imageFile.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async function () {
      console.log(reader.result);
      const { data } = await api.post("/imageprediction", {
        imageDataUrl: reader.result,
      });
      console.log(data);
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      Hello
      <input
        type="file"
        name="imageFile"
        alt="your trash"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default ImagePred;
