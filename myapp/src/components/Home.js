import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';

const Home = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollEffect, setScrollEffect] = useState({ scale: 1, slideLeft: '-100%', slideRight: '100%' });

  const handleTrackingIdChange = (event) => {
    setTrackingId(event.target.value);
  };

  const handleTrackButtonClick = () => {
    console.log('Tracking ID:', trackingId);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsScrolled(true);
      setScrollEffect({
        scale: 1.1,
        slideLeft: '0',
        slideRight: '0',
      });
    } else {
      setIsScrolled(false);
      setScrollEffect({
        scale: 1,
        slideLeft: '-100%',
        slideRight: '100%',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const trackingBoxStyle = {
    marginTop: isScrolled ? '10px' : '20px',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    transform: `scale(${scrollEffect.scale})`,
  };

  const inputStyle = {
    flex: 1,
    marginRight: '10px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
  };

  const bottomBoxStyle = {
    position: 'relative',
    height: '250px',
    border: '1px solid #ddd',
    textAlign: 'center',
    borderRadius: '5px',
    overflow: 'hidden',
    margin: '10px',
    transition: 'transform 0.5s ease, opacity 0.5s ease',
  };

  const headingStyle = {
    fontSize: '24px',
    margin: '10px 0',
    color: '#333',
  };

  const captionStyle = {
    fontSize: '20px',
    color: '#333',
  };

  const boxImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.7,
  };

  const boxContentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  };

  const images = [
    'citizen1.png', // Replace with your image paths
    'suggestions2.png',
    'complaint1.jpg',
  ];

  const textBoxStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fbe3e8', // Dark blue background for the overall container
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%', // Ensures the text box takes the full height of the column
    fontFamily: 'Arial, sans-serif', // Changed font family
    color: '#fff', // White text color
  };

  const paragraphBoxStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    backgroundColor: '#a28089', // Light blue color for individual text boxes
    color: '#fff', // White text color
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center" style={{ marginTop: '20px' }}>
          <Col xs={12} md={2} className="d-flex align-items-center">
            <div style={textBoxStyle}>
              <div style={paragraphBoxStyle}>
                <p>City Administration System helps manage city services efficiently.</p>
              </div>
              <div style={paragraphBoxStyle}>
                <p>Track your requests and complaints in real-time.</p>
              </div>
              <div style={paragraphBoxStyle}>
                <p>Stay updated with the latest city news and updates.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <img src="logo.png" alt="Logo" style={{ width: '110px', height: '90px', marginRight: '10px' }} />
              <h1 style={{ color: '#00008B', fontFamily: 'Monospace' }}>CITY ADMINISTRATION SYSTEM</h1>
            </div>

            <div style={{ position: 'relative', maxHeight: '300px', overflow: 'hidden', marginBottom: '20px' }}>
              <Carousel controls indicators interval={1000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="image1.jpg"
                    alt="First slide"
                    style={{ objectFit: 'fill', maxHeight: '300px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="image22.jpg"
                    alt="Second slide"
                    style={{ objectFit: 'fill', maxHeight: '300px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="44.jpg"
                    alt="Third slide"
                    style={{ objectFit: 'fill', maxHeight: '300px' }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            <div id="tracking-box" style={trackingBoxStyle}>
              <input
                type="text"
                value={trackingId}
                onChange={handleTrackingIdChange}
                placeholder="Enter Tracking ID"
                style={inputStyle}
              />
              <Button variant="primary" onClick={handleTrackButtonClick}>Track</Button>
            </div>
          </Col>
          <Col xs={12} md={2} className="d-flex align-items-center">
            <div style={textBoxStyle}>
              <div style={paragraphBoxStyle}>
                <p>Provide your valuable feedback to improve our services.</p>
              </div>
              <div style={paragraphBoxStyle}>
                <p>Access various city resources at your fingertips.</p>
              </div>
              <div style={paragraphBoxStyle}>
                <p>Connect with city officials for any assistance.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Bottom Boxes with Heading, Caption, and Images */}
      <Container fluid style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
        <Row className="justify-content-center">
          {['Total Citizens', 'Total Suggestion', 'Total Complaints'].map((caption, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} style={{ padding: '10px' }}>
              <div
                style={{
                  ...bottomBoxStyle,
                  transform: index === 0 || index === 2 ? `scale(${scrollEffect.scale}) translateX(${index === 0 ? scrollEffect.slideLeft : scrollEffect.slideRight})` : `scale(${scrollEffect.scale})`,
                  opacity: isScrolled ? 1 : 0.8,
                }}
              >
                <img src={images[index]} alt={caption} style={boxImageStyle} />
                <div style={boxContentStyle}>
                  <div style={headingStyle}>0</div>
                  <div style={captionStyle}>{caption}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Home;
