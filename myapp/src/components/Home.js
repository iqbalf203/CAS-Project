import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Badge, Modal } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';
import './Home.css'
import { Link } from 'react-router-dom';
import ComplaintService from '../services/ComplaintService';
import UserService from '../services/UserService';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

const Home = () => {

    const [complaintId, setComplaintId] = useState('');
    const [complaintData, setComplaintData] = useState({});
    const [dataCount, setDataCount] = useState({});

    const [showModal, setShowModal] = useState(false);
    const isLoggedIn = useSelector(store=>store.user.isLoggedIn)

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        UserService.dataCount().then((resp)=>{
            setDataCount(resp)
        })
    }, [])
    

    const handleChange = (e) => {
        setComplaintId(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        ComplaintService.getComplaintByComplaintId(complaintId).then((resp) => {
            console.log(resp)
            setComplaintData(resp.data)
            setShowModal(true)
        }).catch((resp)=>{
            toast.error('Invalid Complaint ID')
        })

    }
    const getStatusBadgeColor = (status) => {
        switch (status) {
            case 'open':
                return 'primary'; // Blue
            case 'in progress':
                return 'warning'; // Yellow
            case 'resolved':
                return 'success'; // Green
            case 'dismissed':
                return 'secondary'; // Red
            default:
                return 'danger'; // Gray for undefined status
        }
    };

    return (
        <div className='home-bg'>
            <div className="home-section">
                <div className='heading'>
                    <img src="../logo.png" alt="Logo" style={{ width: '160px', height: '115px', marginRight: '10px' }} />
                    <h2>City Administration System</h2>
                    <h6>Your efficient solution for managing city services and swiftly addressing complaints.</h6>
                </div>
                <div className="complaint-status-container">
                    <form onSubmit={handleSubmit}>
                        <i className="fas fa-search complaint-icon"></i>
                        <input
                            type="text"
                            value={complaintId}
                            name='complaintId'
                            className="complaint-input"
                            placeholder="Enter Complaint ID"
                            autoFocus
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn-check-status">
                            Check Status
                        </button>
                    </form>
                </div>
                { !isLoggedIn && 
                <Link to="/user/login" className="nav-link">
                    <button type="button" className="btn btn-outline-primary btn-home">Login</button>
                </Link> 
                }
            </div>

            <Container fluid className="bottom-box-container">
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={3} className="bottom-box-column slide-left">
                        <div className="bottom-box">
                            <img src="../citizen1.png" alt="Total Citizens" className="box-image" />
                            <div className="box-content">
                                <div className="heading">{dataCount.citizen}</div>
                                <div className="caption">Total Citizens</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="bottom-box-column slide-right">
                        <div className="bottom-box">
                            <img src="../suggestions2.png" alt="Total Suggestions" className="box-image" />
                            <div className="box-content">
                                <div className="heading">{dataCount.suggestion}</div>
                                <div className="caption">Total Suggestions</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="bottom-box-column slide-left">
                        <div className="bottom-box">
                            <img src="../complaint1.jpg" alt="Total Complaints" className="box-image" />
                            <div className="box-content">
                                <div className="heading">{dataCount.complaint}</div>
                                <div className="caption">Total Complaints</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{complaintData.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <p><strong>Creator:</strong> {complaintData.creator}</p> */}
                        <p><strong>Complaint ID:</strong> {complaintData.complaintId}</p>
                        <p><strong>Complaint Type:</strong> {complaintData.complaintType}</p>
                        <p><strong>Description:</strong> {complaintData.description}</p>
                        <p><strong>Creation Date:</strong> {new Date(complaintData.creationDate).toLocaleString()}</p>
                        <p><strong>Status:</strong> <Badge bg={getStatusBadgeColor(complaintData.status)}>{complaintData.status}</Badge></p>                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <Footer />
            <ToastContainer/>
        </div>

    );
};

export default Home;