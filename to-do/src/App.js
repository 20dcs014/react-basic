import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const saveTodo = (event) => {
    event.preventDefault();
    const toname = event.target.toname.value.trim();
    if (toname && !toDoList.includes(toname)) {
      setToDoList([...toDoList, toname]);
      event.target.toname.value = ''; // Clear the input field
    } else {
      alert("Already exists or invalid input");
    }
  };

  return (
    <div className="App">
      <form onSubmit={saveTodo}>
        <h1>To Do List</h1>
        <input type="text" name="toname" required />
        <button type="submit">Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          <ToDoListItems toDoList={toDoList} />
        </ul>
      </div>
    </div>
  );
}

function ToDoListItems({ toDoList }) {
  return (
    <>
      {toDoList.map((item, index) => (
        <li key={index}>{item}<span>&times;</span></li>
      ))}
    </>
  );
}

export default App;