import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import { useSelector } from 'react-redux'
import Login from './Login'
import Profile from './Profile'
import SignUp from './SignUp'
import ComplaintForm from './ComplaintForm'
import ShowComplaint from './ShowComplaint'
import SuggestionForm from './SuggestionForm'
import ShowSuggestion from './ShowSuggestion'
import Logout from './Logout'
import ShowUser from './ShowUser'
import Home from './Home'
import AuthInit from '../auth/AuthInit'
import { ToastContainer } from 'react-toastify'


const AppRoutes = () => {

  const isLoggedIn = useSelector(status => status.user.isLoggedIn)


  return (
    <>
        <NavBar />
        <AuthInit />
        <ToastContainer
          position="top-right" 
          autoClose={1500}
        />
        <Routes>

        <Route path='/home' Component={Home}></Route>
          <Route path='/login' Component={Login}></Route> 
          {isLoggedIn && <Route path='/profile' Component={Profile}></Route>}
          <Route path='/signup' Component={SignUp}></Route>
          {isLoggedIn && <Route path='/raise-complaint' Component={ComplaintForm}></Route>}
          {isLoggedIn && <Route path='/show-complaint' Component={ShowComplaint}></Route>}
          {isLoggedIn && <Route path='/all-complaints' Component={ShowComplaint}></Route>}
          {isLoggedIn && <Route path='/submit-suggestion' Component={SuggestionForm}></Route>}
          {isLoggedIn && <Route path='/show-suggestion' Component={ShowSuggestion}></Route>}
          {isLoggedIn && <Route path='/my-suggestions' element={<ShowSuggestion mySuggestion = {true}/>}></Route>}
          {isLoggedIn && <Route path='/logout' Component={Logout}></Route>}
          <Route path='*' Component={Home}></Route>
          {isLoggedIn && <Route path='/show-users' Component={ShowUser}></Route>}
          
        </Routes>
    </>
  )
}

export default AppRoutes