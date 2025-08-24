import { useEffect, useState } from 'react'
import { MDBCol, MDBBtn, MDBIcon, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import './AdminProfile.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminService from '../../services/AdminService';
import {useSelector} from 'react-redux';

const AdminProfile = (props) => {

  const [adminData, setAdminData] = useState({})
  const [show, setShow] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [updateData, setUpdateData] = useState({});

  const adminId = useSelector(obj=>obj.admin.adminId);
  const token = useSelector(obj=>obj.admin.token)

  useEffect(() => {
      AdminService.getAdmin(adminId,token)
      .then((resp)=>{
        setAdminData(resp)
      }).catch((error)=>{
        toast.error(error.response.data.message)
      })
      
  }, [props.adminId,props.authToken])



  const handleClose = () => setShow(false);
  const handlePasswordClose = () => setShowChangePassword(false)

  const handleShow = () => {

    setUpdateData({
      name: adminData.name,
      email: adminData.email,
      username: adminData.username,
      phone: adminData.phone
    })
    setShow(true);
  }

  const handleShowPassword = () => setShowChangePassword(true)

  const handleInputChange = (event) => {
    setUpdateData({ ...updateData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async () => {

    AdminService.updateAdmin(adminData.id,updateData).then((resp)=>{
      setAdminData({...adminData,...updateData})
    }).catch((error)=>{
      toast.error(error.response.data.message)
    })
    

    setShow(false) || setShowChangePassword(false)

  }

  return (
    <>
      <section className="vh-80" style={{ backgroundColor: '#f4f5f7' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://cdn2.iconfinder.com/data/icons/shopping-colorline/64/admin-1024.png"
                      alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">{adminData.name}</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBCardText >Role:</MDBCardText>
                    <MDBCardText >{adminData.role}</MDBCardText>
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">{adminData.email}</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">{adminData.phone}</MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Username</MDBTypography>
                          <MDBCardText className="text-muted">{adminData.username}</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Password</MDBTypography>
                          <MDBBtn className='btn-sm' color='danger' onClick={handleShowPassword} >Change Password</MDBBtn>
                        </MDBCol>
                      </MDBRow>

                      <hr className="mt-0 mb-4" />

                      <Button className='btn-sm' variant="primary" onClick={handleShow}>Update</Button>


                      <div className="d-flex justify-content-start">
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>


      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>email</Form.Label>
              <Form.Control type="text" name="email" value={updateData.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>phone</Form.Label>
              <Form.Control type="number" name="phone" value={updateData.phone} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>username</Form.Label>
              <Form.Control type="text" name="username" value={updateData.username} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showChangePassword} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="text" name="password" value={updateData.password} onChange={handleInputChange} />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePasswordClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AdminProfile