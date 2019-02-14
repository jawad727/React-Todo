// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//put map in here


import React from 'react';
import './Todo.css';

import TodoForm from './TodoForm';
import Todo from './Todo';


const Todo = [

    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }

];


class AllTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            note: ''
        };

    }


    AddTodo = e => {
        e.preventDefault();
        
    }


}

export default TodoList