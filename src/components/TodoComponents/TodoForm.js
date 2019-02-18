
import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addTask}>
                <input type="text" 
                onChange={props.addForm} 
                value={props.task}
                name='task'
                />
              
                <input type="text" 
                onChange={props.addForm} 
                value={props.price}
                name="price"
                />
                <button
                >Add</button>
                
            </form>
        </div>
    )
}


export default TodoForm

