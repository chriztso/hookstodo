import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [id, setId] = useState(0)

  const handleSubmit = () => {
    setTodos([...todos, {'text': todo, 'id': id, 'completed': false}]); 
    setTodo('');
    setId(id+1);
  }

  const setComplete = (index) => {
    let newTodos = [...todos]; 
    newTodos[index].completed = true;
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    let newTodos = [...todos]; 
    newTodos.splice(index, 1); 
    setTodos(newTodos)
  }

  return (
    <div>
      Count: {count}
      <button onClick={() => {setCount(count+1)}} value = 'Increment'>Increment</button>
      <div>
        <input type = 'text' onChange={event => setTodo(event.target.value)}></input>
        <input type = 'submit' onClick={handleSubmit}></input>
        {todos.length > 0 ? todos.map((todo, index) => <ToDoItem todo={todo} index={index} setComplete={setComplete} removeTodo={removeTodo}/>) : null}
      </div>
    </div>
  );
}

function ToDoItem({todo, index, setComplete, removeTodo}){
  const [isEdit, setEdit] = useState(false)
  return (
    <div>
      {isEdit === false ? <div style ={{textDecoration: todo.completed ? 'line-through': ''}}>
        {index}{' '}
        {todo.text}
        <button onClick={() => {setComplete(index)}}>Completed</button>
        <button onClick={() => {removeTodo(index)}}>Remove</button> 
        <button onClick={() => {setEdit(true)}}>Edit</button>
      </div> :  <div><input type = 'text' placeholder = {todo.text}></input><button onClick={() => setEdit(false)}>Finish</button></div>}
    </div>
  )
}

export default App;
