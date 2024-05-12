import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from "@mui/material";

const Report = ({ predictionResult, imagePath }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    district: "",
    catgeory:"",
    note: "",
    
    confidenceLevel: predictionResult ? predictionResult.confidence : "",
    uploadedImagePath: imagePath || "",
    lan: "",
    lon: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (predictionResult) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        beetleDamage: predictionResult.class,
        confidenceLevel: predictionResult.confidence,
      }));
    }
  }, [predictionResult]);

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prevFormData) => ({
          ...prevFormData,
          lan: latitude.toFixed(6),
          lon: longitude.toFixed(6),
        }));
      },
      (error) => {
        console.error("Error getting user's location:", error);
      }
    );
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);

  
  fetch("http://localhost:3001/api/submitData/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        setSubmitSuccess(true);
        console.log("Form data submitted successfully");
      } else {
        console.error("Failed to submit form data");
        
      }
    })
    .catch((error) => {
      console.error("Error submitting form data:", error);
      
    });
};


  const handleCloseSnackbar = () => {
    setSubmitSuccess(false);
  };

  return (
    <div>
      <Navbar />
      <Box
        display="wrap"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        flexDirection="column"
        padding="40px"
      >
        <Typography variant="h4" gutterBottom>
          Report Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Phone Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Beetle Damage</InputLabel>
              <Select
                label="Beetle Damage"
                name="catgeory"
                value={formData.catgeory}
                onChange={handleChange}
              >
                <MenuItem value="1">Red Beetle damage</MenuItem>
                <MenuItem value="2">Black beetle Damage</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>District</InputLabel>
              <Select
                label="District"
                name="district"
                value={formData.district}
                onChange={handleChange}
              >
                <MenuItem value="1">Ampara</MenuItem>
                <MenuItem value="2">Anuradhapura</MenuItem>
                <MenuItem value="3">Badulla</MenuItem>
                <MenuItem value="4">Batticaloa</MenuItem>
                <MenuItem value="5">Colombo</MenuItem>
                <MenuItem value="6">Galle</MenuItem>
                <MenuItem value="7">Gampaha</MenuItem>
                <MenuItem value="8">Hambantota</MenuItem>
                <MenuItem value="9">Kalutara</MenuItem>
                <MenuItem value="10">Jaffna</MenuItem>
                <MenuItem value="11">Kalutara</MenuItem>
                <MenuItem value="12">Kandy</MenuItem>
                <MenuItem value="13">Kegalle</MenuItem>
                <MenuItem value="14">Kilinochchi</MenuItem>
                <MenuItem value="15">Kurunegala</MenuItem>
                <MenuItem value="16">Mannar</MenuItem>
                <MenuItem value="17">Matale</MenuItem>
                <MenuItem value="18">Matara</MenuItem>
                <MenuItem value="19">Monaragala</MenuItem>
                <MenuItem value="20">Mullaitivu</MenuItem>
                <MenuItem value="21">Nuwara Eliya</MenuItem>
                <MenuItem value="22">Polonnaruwa</MenuItem>
                <MenuItem value="23">Puttalam</MenuItem>
                <MenuItem value="24">Ratnapura</MenuItem>
                <MenuItem value="25">Trincomalee</MenuItem>
                <MenuItem value="26">Vavuniya</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Latitude"
              name="lat"
              value={formData.lan}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
              disabled 
            />
            <TextField
              label="Longitude"
              name="lon"
              value={formData.lon}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
              disabled 
            />

            <TextField
              label="Note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              style={{ fontSize: "16px" }}
            />
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#3AB54B", marginTop: "20px" }}
            >
              Submit
            </Button>
            
          </Box>
        </form>
      </Box>
      <Footer />
      <Snackbar
        open={submitSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Submitted, Thank You."
      />
    </div>
  );
};

export default Report;
