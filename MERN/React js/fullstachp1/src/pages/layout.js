import {Outlet,Link} from 'react-router-dom';
import React from 'react'

function Layout() {
  return (
    <>
    <nav>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
           <Link to="/contact">contact</Link> 
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/Register">Register</Link>
        </li>
    </nav>
    <Outlet/>
    </>
  )
};
export default Layout;
