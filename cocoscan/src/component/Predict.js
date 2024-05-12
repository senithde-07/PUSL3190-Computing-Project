import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { Box, Typography, Button } from "@mui/material";
import Footer from "./Footer";
import img1 from "./images/Group 35.png";
import img2 from "./images/Group 46.png";
import exifr from "exifr";
import { Link } from "react-router-dom";

const Predict = () => {
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [exifData, setExifData] = useState(null);
  const [imagePath, setImagePath] = useState(null); 

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const exifData = await exifr.parse(file);
    console.log("EXIF data:", exifData);
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setExifData(exifData);
    setImagePath(file.name); 
    setPredictionResult(null);
  };

  const handleDetect = async () => {
    if (!uploadedImage) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", fileInputRef.current.files[0]);
    formData.append("exifData", JSON.stringify(exifData));

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to predict. Please try again later.");
      }

      const data = await response.json();
      setPredictionResult(data);
    } catch (error) {
      console.error("Prediction error:", error.message);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          UPLOAD OR TAKE AN IMAGE OF <br /> A COCONUT TREE TO PROCESS
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box mr={1} onClick={handleBoxClick}>
            <img
              src={img1}
              alt=""
              style={{ width: "150px", height: "120px", cursor: "pointer" }}
            />
          </Box>
          <Box ml={1} onClick={handleBoxClick}>
            <img
              src={img2}
              alt=""
              style={{ width: "150px", height: "120px", cursor: "pointer" }}
            />
          </Box>
        </Box>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {uploadedImage && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={uploadedImage}
                alt="Uploaded"
                style={{ maxWidth: "100%", maxHeight: "400px" }}
              />
              <Button
                variant="contained"
                onClick={handleDetect}
                style={{
                  backgroundColor: "#3AB54B",
                  bottom: "-10px",
                }}
              >
                Detect
              </Button>
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="body1">Image Path: {imagePath}</Typography>
              {predictionResult && (
                <>
                  <Typography variant="body1">
                    Prediction: {predictionResult.class}
                  </Typography>
                  <Typography variant="body1">
                    Confidence: {predictionResult.confidence}
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/Report"
                    style={{ backgroundColor: "red", marginTop: "10px" }}
                  >
                    Report
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default Predict;
