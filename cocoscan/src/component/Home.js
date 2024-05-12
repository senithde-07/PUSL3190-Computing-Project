import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Typography, Box, Button } from "@mui/material";
import img from "./images/image2.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userIP, setUserIP] = useState("");

  const handlePredictClick = () => {
    navigate("/predict");
  };

  const handleInformationClick = () => {
    navigate("/information");
  };

  useEffect(() => {
    const fetchUserIP = async () => {
      try {
        // Fetch the user's IP address from an IP API
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        const { ip } = data;
        setUserIP(ip);

        // Send the user's IP address to your API
        await fetch("http://localhost:3001/api/ip/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ip }),
        });

        console.log("User IP address sent successfully:", ip);
      } catch (error) {
        console.error("Error fetching or sending IP address:", error);
      }
    };

    // Call the function to fetch and send the IP address when the component mounts
    fetchUserIP();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <Navbar />
      <Box
        display="flex"
        flexDirection={{ xs: "column-reverse", md: "row" }}
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
        marginTop={{ xs: "50px", md: 0 }}
      >
        <Box flex="1">
          <Typography
            variant="h2"
            sx={{
              marginLeft: { xs: "20px", md: "100px" },
              marginTop: "100px",
              fontWeight: "bold",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            A{" "}
            <span style={{ color: "green", textTransform: "uppercase" }}>
              PREDICTIVE SYSTEM
            </span>{" "}
            FOR DETECTING BEETLES THAT DAMAGE COCONUT TREES
          </Typography>
        </Box>
        <Box
          flex="1"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginRight: "50px",
            marginTop: "30px",
          }}
        >
          <img
            src={img}
            alt="Logo"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "450px",
              marginTop: { xs: "100px", md: 0 },
              marginRight: { md: "50px" },
            }}
          />
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        mt={20}
      >
        <Typography variant="h3" fontWeight="bold">
          WHAT IS COCO SCAN SYSTEM?
        </Typography>
        <Typography
          sx={{
            marginTop: "30px",
            paddingLeft: { xs: "20px", md: "250px" },
            paddingRight: { xs: "20px", md: "250px" },
            fontWeight: "600",
          }}
          variant="body1"
        >
          Coco Scan is a cutting-edge web-based system that harnesses the power
          of machine learning using digital images to identify beetle species
          infesting Coconut Trees and how to control those beetles. Powered by
          advanced computer vision algorithms and deep learning techniques, Coco
          Scan will revolutionize weevil control management in coconut
          plantations.
        </Typography>
        <Typography
          sx={{
            marginTop: "20px",
            paddingLeft: { xs: "20px", md: "250px" },
            paddingRight: { xs: "20px", md: "250px" },
            fontWeight: "600",
          }}
          variant="body1"
        >
          To use Coco Scan, coconut growers upload an image of a coconut tree
          showing symptoms or anomalies with those symptoms. The system then
          processes the image by extracting key visual features and patterns. By
          analyzing these characteristics and comparing them with a large
          database, it is possible to accurately identify which beetle species
          has damaged the coconut tree.
        </Typography>
        <Typography
          sx={{
            marginTop: "20px",
            paddingLeft: { xs: "20px", md: "250px" },
            paddingRight: { xs: "20px", md: "250px" },
            fontWeight: "600",
          }}
          variant="body1"
        >
          Once the beetle that has damaged the coconut tree is detected, Cocoa
          Scan provides detailed information about the specific disease,
          including potential causes, recommended treatments, and preventative
          measures. This enables coconut growers to take early action, implement
          targeted interventions, and reduce disease spread and impact.
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        mt={20}
      >
        <Typography variant="h3" fontWeight="bold">
          HOW DOES THIS SYSTEM WORK ?
        </Typography>
        <Typography
          sx={{
            marginTop: "30px",
            paddingLeft: { xs: "20px", md: "250px" },
            paddingRight: { xs: "20px", md: "250px" },
            fontWeight: "600",
          }}
          variant="body1"
        >
          Coco Scan is a web-based system that uses a machine learning model to
          detect beetles that damage the coconut tree and provide control
          solutions for those beetles. Users upload images of a damaged coconut
          tree, and they are analyzed using computer vision and deep learning
          techniques. The model compares visual features extracted from images
          with a comprehensive database of known beetle-damaged plants to
          identify specific beetle species.
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        mt={4}
        sx={{ marginBottom: "50px" }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handlePredictClick}
          style={{
            marginRight: "20px",
            backgroundColor: "white",
            color: "green",
            border: "1px solid green",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "green",
              color: "white",
              border: "1px solid green",
            },
          }}
        >
          Go Predict
        </Button>
        <Button
          variant="contained"
          onClick={handleInformationClick}
          color="primary"
          style={{
            marginLeft: "10px",
            backgroundColor: "white",
            color: "green",
            border: "1px solid green",
            padding: "10px 20px 10px 20px",
            "&:hover": {
              backgroundColor: "green",
              color: "white",
              border: "1px solid green",
            },
          }}
        >
          More Info
        </Button>
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
