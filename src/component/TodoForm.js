import React, { Component } from 'react'
import { addTask } from '../redux/action/taskAction';
import { connect } from 'react-redux';

export class TodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todo : ''
        }
    }

    handleChange = e => {
        this.setState({
            todo : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.todo)
        this.setState({
            todo : ''
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group mt-4" >
                    <label htmlFor="todo">Add Todo</label>
                    <input type="text" value={this.state.todo} onChange={this.handleChange} className="form-control" id="todo" placeholder="Add todo"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addTask : (task) => dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(TodoForm)
