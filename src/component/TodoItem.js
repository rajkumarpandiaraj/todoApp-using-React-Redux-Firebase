import React from 'react';
import { MdDelete } from 'react-icons/md';
import { deleteTask } from '../redux/action/taskAction';
import { connect } from 'react-redux';


function TodoItem({task, deleteTask}) {
    return (
    <li className="list-group-item list-hover d-flex justify-content-between align-items-center">
        <p className='m-0'>{task.task}</p>
        <MdDelete size='1.5rem' onClick={() => deleteTask(task.id)}/>
    </li>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        deleteTask : (id) => dispatch(deleteTask(id))
    }
}

export default connect(null, mapDispatchToProps)(TodoItem)
