import React from 'react';
import { Card, CardBody, CardTitle, CardText, Badge, Col } from 'react-bootstrap';

const ShowComplaint = () => {
  const sampleComplaints = [
    {
      id: 1,
      title: 'Loud Construction Noise',
      description: 'Construction noise occurring during late hours, disturbing residents.',
      status: 'open',
      address: {
        addressLine1: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        pincode: '12345'
      },
      complaintType: 'Noise'
    },
    {
      id: 2,
      title: 'Pothole on Main Road',
      description: 'Large pothole causing traffic congestion and damage to vehicles.',
      status: 'in progress',
      address: {
        addressLine1: '456 Elm Street',
        city: 'Townsville',
        state: 'Stateville',
        pincode: '54321'
      },
      complaintType: 'Road Maintenance'
    },
    {
      id: 3,
      title: 'Garbage Overflow',
      description: 'Overflowing garbage bins on street corners attracting pests and creating a health hazard.',
      status: 'resolved',
      address: {
        addressLine1: '789 Oak Avenue',
        city: 'Villageton',
        state: 'Stateville',
        pincode: '67890'
      },
      complaintType: 'Waste Management'
    },
    {
        id: 4,
        title: 'Unauthorized Parking',
        description: 'Vehicles parked in no-parking zones causing obstruction to traffic flow. Look out for the issue',
        status: 'dismissed',
        address: {
          addressLine1: '101 Oak Street',
          city: 'Cityville',
          state: 'Stateville',
          pincode: '54321'
        },
        complaintType: 'Public Safety'
      }
  ];

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
      {sampleComplaints.map(complaint => (
        <div className="col-sm-6 mt-4" key={complaint.id}>
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
