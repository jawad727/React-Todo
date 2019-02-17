

import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div>
            <div>{props.todo.price}</div>
            <div>{props.todo.task}</div>
        </div>
       
        
    )
}

export default Todo