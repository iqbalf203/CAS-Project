import React, { useState } from 'react';
import ComplaintService from '../services/ComplaintService';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const complaintTypes = ['Noise', 'Road Maintenance', 'Waste Management', 'Public Safety', 'Infrastructure', 'Environmental', 'Building Code', 'Traffic'];

const ComplaintForm = ()=> {

  const userId = useSelector(store=>store.user.currentUser._id)
  const token = useSelector(obj=>obj.user.token);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'open',
    creator: '',
    address: {
      addressLine1: '',
      state: '',
      city: '',
      pincode: ''
    },
    complaintType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value
      }
    });
  };
let newFormData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Id from complaint form-",userId)
    newFormData = {...formData,'creator': userId}
    try {
      const complaint = await ComplaintService.createComplaint(newFormData,token)
      if(complaint.status===201){
        setFormData({
          title: '',
          description: '',
          status: 'open',
          creator: '',
          address: {
            addressLine1: '',
            state: '',
            city: '',
            pincode: ''
          },
          complaintType: ''
        })
        toast.success('Complaint created')
      }
    } catch (error) {
      toast.error('Please try again later!')
    }
    
  };

  return (
    <div className="container">
      <h2>Complaint Form</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="complaintType" className="form-label">Complaint Type</label>
          <select className="form-select" id="complaintType" name="complaintType" value={formData.complaintType} onChange={handleChange} required>
            <option value="">Select Complaint Type</option>
            {complaintTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="addressLine1" className="form-label">Address Line 1</label>
          <input type="text" className="form-control" id="addressLine1" name="addressLine1" value={formData.address.addressLine1} onChange={handleAddressChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" className="form-control" id="state" name="state" value={formData.address.state} onChange={handleAddressChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" name="city" value={formData.address.city} onChange={handleAddressChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">Pincode</label>
          <input type="number" className="form-control" id="pincode" name="pincode" value={formData.address.pincode} onChange={handleAddressChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default ComplaintForm;
