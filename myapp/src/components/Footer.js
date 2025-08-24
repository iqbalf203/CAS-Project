import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '10px 20px', // Reduced padding
    justifyContent: 'space-between',
    width: "100%"
  };

  const sectionStyle = {
    flex: 1,
    minWidth: '200px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the items horizontally
  };

  const logoStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: "100%"
  };

  const logoImgStyle = {
    width: '100px', // Increased logo size
    height: 'auto',
  };

  const bottomStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '10px', // Reduced margin
    borderTop: '1px solid #333',
    paddingTop: '10px',
  };

  return (
    <div style={footerStyle}>
      <div style={sectionStyle}>
        <div style={logoStyle}>
          <img src="../logo.png" alt="Bequant Logo" style={logoImgStyle} /> {/* Replace with your actual logo */}
          <p>City Administration System</p>
          <p>Empowering cities with seamless governance solutions, transforming administration into efficiency and excellence</p>
          <p>For <Link to="/admin" target="_blank" rel="noopener noreferrer">Admins</Link></p>
        </div>
      </div>
      <div style={bottomStyle}>
        <p>Documentation</p>
        <p>Privacy & Cookie Policy</p>
      </div>
    </div>
  );
}

export default Footer;