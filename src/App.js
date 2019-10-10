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

  return (
    <div>
      Count: {count}
      <button onClick={() => {setCount(count+1)}} value = 'Increment'>Increment</button>
      <div>
        <input type = 'text' onChange={event => setTodo(event.target.value)}></input>
        <input type = 'submit' onClick={handleSubmit}></input>
        {todos.length > 0 ? todos.map((todo, index) => <ToDoItem todo={todo} index={index}/>) : null}
      </div>
    </div>
  );
}

function ToDoItem({todo, index}){
  return (
    <div>
      {index}{' '}
      {todo.text}
      <button>Completed</button>
    </div>
  )
}

export default App;
