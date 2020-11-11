import React from 'react';
import { NavLink } from 'react-router-dom';


function SignedOutLinks() {
    return (
        <>
            <NavLink to='/login' className='main-menu'>
            <li className="nav-item mx-3 mt-2">
                Login
            </li>
            </NavLink>
            <NavLink to='/signup'className='main-menu'>
            <li className="nav-item mx-3 mt-2">
                SignUp
            </li>
            </NavLink>
        </>
    )
}

export default SignedOutLinks
