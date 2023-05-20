import { useState, useEffect } from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./index.css"
function App() {

  const [todos, setTodos] = useState([])

  let API_TODO = "http://localhost:3001/todos"

  useEffect(() => {

    GetTodos()
  }, [])

  const GetTodos = () => {
    fetch(API_TODO)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error(err))
  };

  const completeTodo = async (id) => {
    console.log("localhost:3001/todo/complete/" + id);

    let data = await fetch("http://localhost:3001/todo/complete/" + id, { method: "PUT" })
    data = await data.json()

    setTodos(todos => todos.map(todo => {
      if (todo._id === data._id) {
        todo.complete = data.complete
      }
      return todo;
    }))

  };

  const deleteTodo = async (id) => {

    let data = await fetch("http://localhost:3001/todo/delete/" + id, { method: "DELETE" })
    data = await data.json()

    setTodos(todos => todos.filter((todo) => todo._id !== data._id))

  };

  return (
    <>
      <div className="App">
        <h1>Welcome, there</h1>
        <h4>Your tasks </h4>

        <div>
          <input type="text"  />
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </div>

        <div className="todos">

          {todos.map((todo, index, arrary) => {
            return (

              <div value={todo.text} key={index} className={
                `todo ${todo.complete ? "is-complete" : ""}`
              } onClick={() => completeTodo(todo._id)}>
                <div className="checkbox"></div>

                <div className="text">{todo.text}</div>

                <div onClick={() => { deleteTodo(todo._id) }} className="delete-todo">x</div>
              </div>

            )
          })}


        </div>
      </div>
    </>
  );
}

export default App;
