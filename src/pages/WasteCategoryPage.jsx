import api from "api/apiService";
import CommongNav from "components/nav/CommonNav";
import { respPX } from "constants/styles";
import React, { useEffect } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const WasteCategoryPage = () => {
  const uploaderRef = React.useRef(null);
  const [image, setImage] = React.useState(null);

  const handleChange = (e) => {
    console.log(e);
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async function () {
      setImage(reader.result);
      console.log(reader.result);
      const { data } = await api.post("/imageprediction", {
        imageDataUrl: reader.result,
      });
      console.log(data);
    };
  };

  useEffect(() => {
    uploaderRef.current.addEventListener("change", (e) => {
      console.log(e.target.files[0]);
    });
  }, []);

  return (
    <>
      <CommongNav />
      <main className={`${respPX} grid py-6 text-center`}>
        <form>
          <h1 className="text-3xl flex items-center justify-center gap-1">
            <span>Upload Waste Image to categorize</span>
            <div className="text-5xl flex items-center justify-center">
              <AddPhotoAlternateIcon fontSize="inherit" color="primary" />
            </div>
          </h1>
          <p className="text-lg my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quod, quia, voluptas quae voluptatem quibusdam
            necessitatibus voluptates quidem quos voluptatibus. Quisquam
            voluptatum, quod, quia, voluptas quae voluptatem quibusdam
          </p>

          <input
            type="file"
            name="imageFile"
            alt="your trash"
            ref={uploaderRef}
            onChange={handleChange}
          />

          {/* <button
            className="px-4 py-2 bg-blue-600 rounded-md text-white"
            onClick={() => uploaderRef.current.click()}
          >
            Upload
          </button> */}
          {image && <img src={image} alt="your trash" />}
        </form>
      </main>
    </>
  );
};

export default WasteCategoryPage;
