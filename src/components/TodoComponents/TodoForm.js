import React from 'react';
import './Todo.css';

const TodoForm = props => {

    return (
        <div className="formline">

            <form>
                <input 
                type="text"
                placeholder="...todo" />
                <button type="submit">Add todo</button> 
                <button type="submit">Clear Completed</button>
            </form>
        </div>
    ); 
};

export default TodoForm