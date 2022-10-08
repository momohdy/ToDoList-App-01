import "./App.css";
import TodoForm from "./components/TodoForm";
import { React, useState } from "react";
import Todo from "./components/Todo";
import { Button } from "bootstrap";

function App() {
  let [todos, setTodos] = useState([]);
  const [TodoToShow, setTodoToShow] = useState("all");

  const [toggleAllComplete, setToggleAllComplete] = useState("True");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoToShow = (s) => {
    setTodoToShow(s);
  };

  const removeAllCompleteTasks = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };

  if (TodoToShow === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (TodoToShow === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }

  return (
    <div className="App container">
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => handleDelete(todo.id)}
          toggleComplete={() => toggleComplete(todo.id)}
        />
      ))}
      <div className="buttons">
        <button
          className="update-btn btn"
          onClick={() => {
            updateTodoToShow("all");
          }}
        >
          All
        </button>
        <button
          className="update-btn btn"
          onClick={() => {
            updateTodoToShow("active");
          }}
        >
          Active
        </button>
        <button
          className="update-btn btn"
          onClick={() => {
            updateTodoToShow("complete");
          }}
        >
          Complete
        </button>
      </div>

      {todos.some((todo) => todo.complete) ? (
        <button className="btn a" onClick={removeAllCompleteTasks}>
          Remove All Complete Todos
        </button>
      ) : null}

      <button
        className="btn a"
        onClick={() => {
          setTodos(
            todos.map((todo) => ({
              ...todo,
              complete: toggleAllComplete,
            }))
          );
          setToggleAllComplete(!toggleAllComplete);
        }}
      >
        Toggle All Complete : {toggleAllComplete}{" "}
      </button>
    </div>
  );
}

export default App;
