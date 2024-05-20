import React from 'react'
import { Link} from 'react-router-dom'
import {useSelector}  from 'react-redux';

const Nav = (props) => {
  
  const isLoggedIn = useSelector(status=>status.admin.isLoggedIn)
  
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
     {!isLoggedIn && <li className="nav-item active">
        <Link className="nav-link" to={'/admin/login'}>Login <span className="sr-only">(current)</span></Link>
      </li>}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/admin/emplist'}>List Employees</Link>
      </li>}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/admin/addemp'}>Add Employee</Link>
      </li>}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/admin/profile'}>Profile</Link>
      </li>}
      {/* {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/parent'}>Parent</Link>
      </li>}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/child'}>Child</Link>
      </li>} */}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/admin/logout'}>Log out</Link>
      </li>}
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Nav