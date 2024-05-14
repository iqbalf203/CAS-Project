import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Badge, Col } from 'react-bootstrap';
import ComplaintService from '../services/ComplaintService';
import {useSelector} from 'react-redux'

const ShowComplaint = () => {
  
  const [complaints,setComplaints] = useState([]);
  const userId = useSelector(store=>store.user.currentUser._id)

  useEffect(()=>{
    ComplaintService.getComplaintByCreatorId(userId).then((resp)=>{
      console.log(resp)
      setComplaints(resp.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
 

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'open':
        return 'primary';
      case 'in progress':
        return 'warning';
      case 'resolved':
        return 'success';
      case 'dismissed':
        return 'secondary';
      default:
        return 'light';
    }
  };

  return (
    <div className="row">
      {complaints.map(complaint => (
        <div className="col-sm-6 mt-4" key={complaints.indexOf(complaint)+1}>
        <Col >
          <Card>
            <CardBody>
                <div>
              <CardTitle><span className="fw-bold">Title: </span>{complaint.title}</CardTitle>
              </div>
              <div>
                <span className="fw-bold">Complaint Type: </span>
                <span>{complaint.complaintType}</span>
              </div>
              <div>
              <CardText><span className="fw-bold">Description: </span>{complaint.description}</CardText>
              </div>
              <div>
                <span className="fw-bold">Address: </span>
                <span>{complaint.address.addressLine1}, {complaint.address.city}, {complaint.address.state} {complaint.address.pincode}</span>
              </div>
              
              <Badge bg={getStatusBadgeVariant(complaint.status)}>{complaint.status}</Badge>
            </CardBody>
          </Card>
        </Col>
        </div>
      ))}
      </div>
  );
}

export default ShowComplaint;
