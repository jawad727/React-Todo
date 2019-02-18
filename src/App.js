import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todoss = [
  {
    task: 'Organize Garage',
    price: 'price',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    price: 'price',
    id: 1528817084358,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoss,

      task: "",
      price: '',
      id: Date.now(),
      completed: false
    };
  }

  addTask = e => {
    e.preventDefault();
    console.log(e.target)
    const newTask = {
      task: this.state.task,
      price: this.state.price,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }

  addForm = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  
  deleteTask = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed
      })
    })
  }
  
  toggleTask = e => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (e === task.id) {
          return {...task, completed: !task.completed}}
        return task;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm  addForm={this.addForm} addTask={this.addTask} />
        <TodoList toggleTask={this.toggleTask} todos={this.state.todos}/>
        <button onClick={this.deleteTask} >Delete</button>
      </div>
    );
  }

}


export default App;
