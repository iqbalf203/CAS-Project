import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput} from 'mdb-react-ui-kit';
import UserService from '../services/UserService';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setLoggedIn, setToken } from '../redux/UserSlice';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            console.log(credentials)
            const resp = await UserService.login(credentials);

            if (resp.status === 200) {

                console.log(resp.data.user._id)
                dispatch(setLoggedIn(true))
                dispatch(setCurrentUser(resp.data.user))
                dispatch(setToken(resp.data.token))

                navigate('/profile')
            }
            else {
                toast.error('Invalid credentials')
            }

        } catch (error) {
            toast.error('Invalid credentials')
            // setCredentials({ username: '', password: '' })
            console.error('Login failed:', error.message);
        }
    };

    const handleChange = (event) => {

        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <MDBContainer className='align-items-center justify-content-center bg-image' fluid style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <div className='mask gradient-custom-3'></div>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                <MDBInput wrapperClass='mb-4 w-100' name='username' value={credentials.value} label='Username' type='text' size="lg" onChange={handleChange} />
                                <MDBInput wrapperClass='mb-4 w-100' name='password' value={credentials.value} label='Password' type='password' size="lg" onChange={handleChange} />

                                <MDBBtn className="mb-2 w-100" color='info' size='lg' onClick={handleSubmit}>Login</MDBBtn>

                                <hr className="my-4" />


                                <p className="small mb-4 pb-lg-3 text-center"><a className="text-muted" href="#!">Forgot password?</a></p>
                                <p className='text-center'>Don't have an account?<Link className='link-no-underline' to={'/signup'}> Register here</Link></p>


                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
<br/><br/><br/><br/><br/>
            </MDBContainer>
            <ToastContainer />

        </>
    )
}

export default Login