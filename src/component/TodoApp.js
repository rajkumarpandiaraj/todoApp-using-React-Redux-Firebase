import React from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

function TodoApp(props) {
    const { tasks, auth } = props;
    
    if(!auth.uid){
        return <Redirect to='/login'/>
    }
    return (
        <div className='container w-50 mx-auto'>
            <TodoForm/>

            <h5 className='mt-4'>Todo's</h5>
            <ul className="list-group mt-3">
                {
                    tasks && tasks.map(task => <TodoItem key={task.id} task={task}/>)
                }
            </ul>
            
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        tasks : state.firestore.ordered.tasks,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        return [{
        collection : 'tasks',
        orderBy : ['date', 'desc'],
        where : ["authorId", '==', `${props.auth.uid}`]
    }]
}))(TodoApp)
