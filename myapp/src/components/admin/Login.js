import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAdminId,setToken,setLoggedIn } from '../../redux/AdminSlice';
import {useDispatch} from 'react-redux'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import AdminService from '../../services/AdminService';


function AdminLogin(props) {

  const navigate = useNavigate();

  const [loginData,setLoginData] = useState({username:'',password:''});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
        const response = await AdminService.login(loginData)

      if(response.status===200){
        // props.setLoggedIn(true)
        // props.setAdminId(response.data.id)
        // props.setAuthToken(response.data.token)
        dispatch(setLoggedIn(true))
        dispatch(setAdminId(response.data.id))
        dispatch(setToken(response.data.token))
       
        
        navigate('/admin/emplist')
      }
      else{
        toast.error('Invalid credentials')
      }
      
    } catch (error) {
      toast.error('Invalid credentials')
      setLoginData({username:'',password:''})
      console.error('Login failed:', error.message);
    }
  };

  const handleChange = (e)=>{

    setLoginData({...loginData,[e.target.name]: e.target.value})

  }

  return (
    <MDBContainer className="my-5 gradient-form custom-bg">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column ms-5 mt-5">

            <div className="text-center">
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png"
                style={{width: '185px'}} alt="logo" /> */}
                <h1>Admin Login</h1>
              <h4 className="mt-1 mb-5 pb-1"> </h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='username' id='form1' type='username' name='username' value={loginData.username} onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' value={loginData.password} onChange={handleChange}/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn type='submit' className="mb-4 w-100 gradient-custom-2" onClick={handleSubmit}>Log In</MDBBtn>
          </div>
          </div>
          </form>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

           <img src='../admin.png' style={{width: '450px'}}/>

          </div>

        </MDBCol>

      </MDBRow>
<ToastContainer/>
    </MDBContainer>
  );
}

export default AdminLogin;
