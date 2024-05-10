import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import img from './images/map.png';

const Map = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px', paddingBottom: '50px' }}>
        <img src={img} alt="" style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }} />
      </div>
      <Footer />
    </div>
  );
};

export default Map;
