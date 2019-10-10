import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [id, setId] = useState(0)
  const [completed, setCompleted] = useState(0); 
  const [pending, setPending] = useState(0)

  const handleSubmit = () => {
    setTodos([...todos, {'text': todo, 'id': id, 'completed': false}]); 
    setTodo('');
    setPending(pending+1)
    setId(id+1);
  }

  const setComplete = (index) => {
    let newTodos = [...todos]; 
    newTodos[index].completed = true;
    setTodos(newTodos)
    setPending(pending-1)
    setCompleted(completed+1)
  }

  const removeTodo = (index) => {
    let newTodos = [...todos]; 
    let todo = newTodos.splice(index, 1); 
    console.log(todo)
    if(todo[0]['completed'] === false){
      setPending(pending-1)
    } 
    if(todo[0]['completed'] === true) {
      setCompleted(completed-1)
    }
    setTodos(newTodos)
  }
  
  const updateTodo = (index, text) => {
    let newTodos = [...todos]; 
    newTodos[index].text = text; 
    setTodos(newTodos)
  }
  return (
    <div>
      Count: {count}
      <button onClick={() => {setCount(count+1)}} value = 'Increment'>Increment</button>
      <div>
        Completed Tasks: {completed}
      </div>
      <div>
        Pending Tasks: {pending}
      </div>
      <div>
        <input type = 'text' onChange={event => setTodo(event.target.value)}></input>
        <input type = 'submit' onClick={handleSubmit}></input>
        {todos.length > 0 ? todos.map((todo, index) => <ToDoItem todo={todo} index={index} setComplete={setComplete} removeTodo={removeTodo} updateTodo={updateTodo}/>) : null}
      </div>
    </div>
  );
}

function ToDoItem({todo, index, setComplete, removeTodo, updateTodo}){
  const [isEdit, setEdit] = useState(false)
  const [input, setInput] = useState('')

  const handleSubmit = (index, text) => {
    updateTodo(index, text); 
    setInput('')
    setEdit(false)
  }
  return (
    <div>
      {isEdit === false ? <div style ={{textDecoration: todo.completed ? 'line-through': ''}}>
        {index}{' '}
        {todo.text}
        <button onClick={() => {setComplete(index)}}>Completed</button>
        <button onClick={() => {removeTodo(index)}}>Remove</button> 
        <button onClick={() => {setEdit(true)}}>Edit</button>
      </div> :  <div><input type = 'text' placeholder = {todo.text} onChange={(event) => {setInput(event.target.value)}}></input><button onClick={() => handleSubmit(index, input)}>Finish</button></div>}
    </div>
  )
}

export default App;
