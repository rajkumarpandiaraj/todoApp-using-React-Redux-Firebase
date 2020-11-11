import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    tasksReducer : tasksReducer,
    authReducer : authReducer
})

export default rootReducer