import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import EmpList from './EmpList'
import AddEmp from './AddEmp'
import LogOut from './LogOut'
import AdminProfile from './AdminProfile'
import {useSelector} from 'react-redux'
import AdminLogin from './Login'


const AdminAppRoutes = () => {

  const isLoggedIn = useSelector(status=>status.admin.isLoggedIn)


  return (
    <>
    <Nav /> 
      <Routes>
        {!isLoggedIn && <Route path='/login' element={<AdminLogin /> }></Route>}
        <Route path='*' Component={AdminLogin}></Route>
        {isLoggedIn && <Route path='/emplist' element={<EmpList />}></Route>}
        {isLoggedIn && <Route path='/addemp' Component={AddEmp}></Route>}
        {isLoggedIn && <Route path='/profile' element={<AdminProfile />}></Route>}
        <Route path='/logout' element={<LogOut />}></Route>
      </Routes>
    </>
  )
}

export default AdminAppRoutes