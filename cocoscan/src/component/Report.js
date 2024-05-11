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
    phoneNumber: "",
    district: "",
    note: "",
    beetleDamage: predictionResult ? predictionResult.class : "",
    confidenceLevel: predictionResult ? predictionResult.confidence : "",
    uploadedImagePath: imagePath || "",
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
    setSubmitSuccess(true);
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
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Beetle Damage</InputLabel>
              <Select
                label="Beetle Damage"
                name="beetleDamage"
                value={formData.beetleDamage}
                onChange={handleChange}
              >
                <MenuItem value="Black beetle Damage">
                  Black beetle Damage
                </MenuItem>
                <MenuItem value="Red Beetle damage">Red Beetle damage</MenuItem>
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
                <MenuItem value="District 1">District 1</MenuItem>
                <MenuItem value="District 2">District 2</MenuItem>
              </Select>
            </FormControl>
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
