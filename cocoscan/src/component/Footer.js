import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Link, Box, Grid } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import img from './images/CocoScan.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar
      position="static"
      style={{
        top: "auto",
        bottom: 0,
        zIndex: 1000,
        backgroundColor: "#3AB54B",
        height: "100px",
      }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", marginTop: { xs: "10px", sm: 0 } }}
            >
              <img
                src={img}
                onClick={handleHomeClick}
                alt="Logo"
                style={{ width: "100px", cursor: "pointer" }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
            <Typography variant="body1" color="inherit">
              © 2024, All rights reserved
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: { xs: "10px", md: 0 },
              }}
            >
              <IconButton
                color="inherit"
                component={Link}
                href="https://www.facebook.com"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://www.instagram.com"
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://twitter.com"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://www.linkedin.com"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
