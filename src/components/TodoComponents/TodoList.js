// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//put map in here
import React from 'react';
import Todo from './Todo'


const TodoList = (props) => {

    return (
        <div>
            {props.todos.map((item) => {
               return <Todo todo={item} key={item.id}/>
            })}
        </div>
    )
}
//above, we are mapping over each object in the todos array, and for every pbject 
//we are returning a todo component

export default TodoList

