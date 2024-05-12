import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import { useSelector } from 'react-redux'
import Login from './Login'
import Profile from './Profile'


const AppRoutes = () => {

  const isLoggedIn = useSelector(status => status.user.isLoggedIn)


  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>

           {/* <Route path='/home' Component={home}></Route> */}
          <Route path='/login' Component={Login}></Route> 
          <Route path='/profile' Component={Profile}></Route>

          {/* {!isLoggedIn && <Route path='/login' element={<Login /> }></Route>}
        <Route path='/dashboard' Component={Dashboard}> </Route>
        
        <Route path='/login' Component={Login}></Route>
        <Route path='/child' Component={Child}></Route>
        <Route path='/parent' Component={Parent}></Route>
        <Route path='*' Component={PageNotFound}></Route>
        {isLoggedIn && <Route path='/emplist' element={<EmpList />}></Route>}
        {isLoggedIn && <Route path='/addemp' Component={AddEmp}></Route>}
        {isLoggedIn && <Route path='/profile' element={<AdminProfile />}></Route>}
        <Route path='/logout' element={<LogOut />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes