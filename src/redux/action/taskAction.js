export const addTask = task => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore()

        firestore.collection('tasks').add({
            task : task,
            date : new Date(),
            authorId : getState().firebase.auth.uid
        }).then(()=> dispatch({type : 'TASK_ADDED'}))
        .catch(err => dispatch({type : 'TASK_ERROR'}))
    }

} 

export const deleteTask = id =>{
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore()

        firestore.collection('tasks').doc(id).delete()
        .then(()=> dispatch({type : 'TASK_DELETED'}))
        .catch(err => dispatch({type : 'TASK_ERROR'}))
    }
}