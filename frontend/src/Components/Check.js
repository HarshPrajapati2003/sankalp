import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { loadLayersModel } from '@tensorflow/tfjs-converter';

const Check = () => {
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  // const loadModel = async () => {
  //   try {
  //     const loadedModel = await tf.loadLayersModel('http://localhost:5000/model.json');
  //     setModel(loadedModel);
  //     console.log('Model loaded successfully!');
  //   } catch (error) {
  //     console.error('Error loading the model:', error);
  //   }
  // };

  // useEffect(() => {
  //   loadModel();
  // }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handlePredict = async () => {
    if (!model) {
      console.error('Model not loaded yet.');
      return;
    }
  
    try {
      const imageElement = document.createElement('img');
      imageElement.src = image;
      await imageElement.decode();
  
      const imageTensor = tf.browser.fromPixels(imageElement).toFloat();
      const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]);
  
      // Preprocess the image: Normalize pixel values to be between 0 and 1
      const preprocessedImage = resizedImage.div(255.0);
  
      // Reshape to add the batch size
      const inputTensor = preprocessedImage.reshape([32, 224, 224, 3]);
  
      // Make predictions
      const predictions = await model.predict(inputTensor);
      const predictionsArray = await predictions.data();
  
      // Update the state with predictions
      setPredictions(predictionsArray);
  
      // Cleanup tensors to free memory
      imageTensor.dispose();
      resizedImage.dispose();
      preprocessedImage.dispose();
      inputTensor.dispose();
      predictions.dispose();
    } catch (error) {
      console.error('Error making predictions:', error);
    }
  };
  

  return (
    <div>
      <input type="file" accept=".jpg" onChange={handleImageUpload} />
      {image && <img src={image} alt="Selected" width="224" />}
      <button onClick={handlePredict}>Predict</button>

      {predictions.length > 0 && (
        <div>
          <h3>Predictions:</h3>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>{`Class ${index}: ${prediction}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Check;
