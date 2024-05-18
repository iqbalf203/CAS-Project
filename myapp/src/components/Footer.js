import React from 'react';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '10px 20px', // Reduced padding
    justifyContent: 'space-between',
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

  const headerStyle = {
    marginBottom: '15px', // Increased margin
    fontSize: '1.1em',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
  };

  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
    padding: 0,
    justifyContent: 'center', // Center the items
    textAlign: 'center', // Center the text
  };

  const listItemStyle = {
    flex: '1 1 calc(30% - 20px)', // Adjust the flex basis for three members in the first row
    maxWidth: 'calc(33.33% - 20px)', // Ensures each item takes up about one-third of the container width
    minWidth: '150px', // Reduced min-width
    marginBottom: '20px', // Increased margin
  };

  const listItemStyleWide = {
    flex: '1 1 calc(45% - 10px)', // Adjust the flex basis for two members in the second row and decreased gap
    maxWidth: 'calc(50% - 10px)', // Ensures each item takes up about half of the container width with decreased gap
    minWidth: '150px', // Reduced min-width
    marginBottom: '10px', // Reduced margin
  };

  const teamMemberNameStyle = {
    fontSize: '1em', // Reduced font size
    fontWeight: 'bold',
  };

  const teamMemberDetailStyle = {
    fontSize: '0.85em', // Reduced font size
  };

  return (
    <div style={footerStyle}>
      <div style={sectionStyle}>
        <div style={logoStyle}>
          <img src="../logo.png" alt="Bequant Logo" style={logoImgStyle} /> {/* Replace with your actual logo */}
          <p>City Administration Systemt</p>
          <p>Empowering cities with seamless governance solutions, transforming administration into efficiency and excellence</p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h4 style={headerStyle}>TEAM MEMBERS</h4>
        <ul style={listStyle}>
          {/* First row with three members */}
          <li style={listItemStyle}>
            <p style={teamMemberNameStyle}>Faisal Iqbal</p>
            <p style={teamMemberDetailStyle}>Faisal@gmail.com</p>
            <p style={teamMemberDetailStyle}>123-456-7890</p>
          </li>
          <li style={listItemStyle}>
            <p style={teamMemberNameStyle}>Yuvraj J R</p>
            <p style={teamMemberDetailStyle}>Yuvraj@gmail.com</p>
            <p style={teamMemberDetailStyle}>098-765-4321</p>
          </li>
          <li style={listItemStyle}>
            <p style={teamMemberNameStyle}>Yashank U</p>
            <p style={teamMemberDetailStyle}>Yashank@gmail.com</p>
            <p style={teamMemberDetailStyle}>456-789-0123</p>
          </li>
          {/* Second row with two members */}
          <li style={listItemStyleWide}>
            <p style={teamMemberNameStyle}>Vishnu Kaku</p>
            <p style={teamMemberDetailStyle}>Vishnu@gmail.com</p>
            <p style={teamMemberDetailStyle}>321-654-9870</p>
          </li>
          <li style={listItemStyleWide}>
            <p style={teamMemberNameStyle}>Vishesh Pancholi</p>
            <p style={teamMemberDetailStyle}>Vishesh@gmail.com</p>
            <p style={teamMemberDetailStyle}>789-012-3456</p>
          </li>
        </ul>
      </div>
      <div style={bottomStyle}>
        <p>Documentation</p>
        <p>Privacy & Cookie Policy</p>
      </div>
    </div>
  );
}

export default Footer;