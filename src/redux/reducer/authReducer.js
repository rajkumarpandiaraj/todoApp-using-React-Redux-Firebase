const initialState = {
    
}
const authReducer = (state=initialState, action) =>{
    const { type } = action;
    if(type === 'LOGIN_SUCCESS'){
        console.log('login success');
        return state;
    }

    if(type === 'LOGIN_ERROR'){
        console.log('login error');
        return state;
    }
    if(type === 'SIGNUP_SUCCESS'){
        console.log('SignUp success');
        return state;
    }

    if(type === 'SIGNUP_ERROR'){
        console.log('SignUp error');
        return state;
    }

    if(type === 'LOGOUT_SUCCESS'){
        console.log('logout success');
        return state;
    }
    return state;
}

export default authReducer