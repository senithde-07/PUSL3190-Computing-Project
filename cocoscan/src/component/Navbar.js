import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Stack, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import logo from './images/vector.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHomeClicked, setIsHomeClicked] = useState(false);
  const [isPredictClicked, setIsPredictClicked] = useState(false);
  const [isInformationClicked, setIsInformationClicked] = useState(false);
  const [isMapClicked, setIsMapClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    setIsHomeClicked(path === '/');
    setIsPredictClicked(path === '/predict');
    setIsInformationClicked(path === '/information');
    setIsMapClicked(path === '/map');
  }, [location.pathname]);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handlePredictClick = () => {
    navigate('/predict');
  };

  const handleInformationClick = () => {
    navigate('/information');
  };

  const handleMapClick = () => {
    navigate('/map');
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', borderBottom: '1px solid black', height: '80px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:'10px' }}>
        <Typography variant="h6" component="div">
          <img onClick={handleHomeClick} src={logo} alt="Logo" style={{ cursor:'pointer' }} />
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button onClick={handleHomeClick} sx={{ color: isHomeClicked ? 'green' : 'black', fontWeight: 'bold', '&:hover': { color: 'green' } }}>Home</Button>
            <Button onClick={handlePredictClick} sx={{ color: isPredictClicked ? 'green' : 'black', fontWeight: 'bold', '&:hover': { color: 'green' } }}>Predict</Button>
            <Button onClick={handleInformationClick} sx={{ color: isInformationClicked ? 'green' : 'black', fontWeight: 'bold', '&:hover': { color: 'green' } }}>Information</Button>
            <Button onClick={handleMapClick} sx={{ color: isMapClicked ? 'green' : 'black', fontWeight: 'bold', '&:hover': { color: 'green' } }}>Map</Button>
          </Stack>
          <Stack direction="row" sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <Button onClick={handleMenuOpen} sx={{ marginLeft: 'auto' }}>
              <MenuIcon />
            </Button>
          </Stack>
        </Box>
      </Toolbar>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={handleMenuClose}
        sx={{ '& .MuiDrawer-paper': { width: '250px' } }} 
      >
        <List>
          <ListItem button onClick={() => { handleMenuClose(); handleHomeClick(); }}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => { handleMenuClose(); handlePredictClick(); }}>
            <ListItemText primary="Predict" />
          </ListItem>
          <ListItem button onClick={() => { handleMenuClose(); handleInformationClick(); }}>
            <ListItemText primary="Information" />
          </ListItem>
          <ListItem button onClick={() => { handleMenuClose(); handleMapClick(); }}>
            <ListItemText primary="Map" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
