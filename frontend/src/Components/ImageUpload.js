import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));

    // Send the image to the server for prediction
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
      console.log(response.data);
      setPrediction(response.data);
    } catch (error) {
      console.error("Error predicting image:", error);
    }
  };

  return (
    <div>
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {selectedImage && <img src={selectedImage} alt="Selected" />}
      </div>
      <div>{prediction && <h1>{prediction["predictions"]}</h1>}</div>
    </div>
  );
};

export default ImageUpload;
