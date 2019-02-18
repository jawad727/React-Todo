

import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div 
        className={`task ${props.todo.completed ? "completed" : ""}`} 
        onClick={() => {
            return props.toggleTask(props.todo.id);
        }}>
            <div>{props.todo.price}</div>
            <div>{props.todo.task}</div>
        </div>
       
        
    )
}

export default Todo