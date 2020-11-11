import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/action/authAction';

function SignedInLinks(props) {
    const { logout } = props
    return (
        <>
            <li className="nav-item mx-3 mt-2" onClick={logout}>
                LogOut
            </li>
        </>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        logout : ()=> dispatch(logout())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)
