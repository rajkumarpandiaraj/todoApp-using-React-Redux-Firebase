const initialState = {
}

const tasksReducer = (state=initialState, action) =>{
    const { type } = action;
    if(type === 'TASK_ADDED'){
        console.log('task Added')
        return state;
    }
    if(type === 'TASK_DELETED'){
        console.log('task Deleted')
        return state;
    }
    if(type === 'TASK_ERROR'){
        console.log('Error');
        return state;
    }
    return state;
}

export default tasksReducer