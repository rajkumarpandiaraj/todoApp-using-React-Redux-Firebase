import React from 'react'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';

function Navbar({auth}) {
    return (
        <div className="navbar navbar-dark bg-dark">
            <h1 className="navbar-brand">TodoApp</h1>
            <div className="" id="navbarSupportedContent">
            <ul className=" ml-auto align-self-center" id='navbar-nav'>
                {
                    auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
                }                
            </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)
