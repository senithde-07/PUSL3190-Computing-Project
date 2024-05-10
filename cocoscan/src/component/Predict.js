import React, { useState } from 'react';
import Navbar from './Navbar';
import { Box, Typography, Grid ,Button} from '@mui/material';
import Footer from './Footer';
import img1 from './images/Group 46.png';
import img2 from './images/Group 35.png';

const Predict = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadedImage(URL.createObjectURL(file));
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
        padding="20px"
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
        >
          UPLOAD OR TAKE AN IMAGE OF A COCONUT TREE TO PROCESS
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6} md={3}>
            <label
              htmlFor="file-upload1"
              style={{ display: "block", textAlign: "center" }}
            >
              <img
                src={img2}
                alt=""
                style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
              />
            </label>
            <input
              id="file-upload1"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <label
              htmlFor="file-upload1"
              style={{ display: "block", textAlign: "center" }}
            >
              <img
                src={img1}
                alt=""
                style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
              />
            </label>
            <input
              id="file-upload2"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </Grid>
        </Grid>
        {uploadedImage && (
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
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
            <Button
              variant="contained"
              color="success"
              sx={{ color: "white", marginTop: "20px" }}
            >
              Detect
            </Button>
          </div>
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default Predict;
