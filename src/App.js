import React, { useState } from "react"; // useState를 import해주는 것 확인
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, todo: "react를 배워봅시다." },
    { id: 2, todo: "usestate를 배워봅시다." },
  ]);


  const [todo, setTodo] = useState(''); // 이름


  const ChangeHandler = (event) => {
    setTodo(event.target.value)
  }


  const clickAddBtnHandler = function (event) {

    const newTodo = {
      id: todos.length + 1,
      todo,
    }

    setTodos([...todos, newTodo]);
    setTodo('') // 초기화
  }

  return (
    <>
      <div class="container">

        <div class="input">
          <input
            value={todo}
            onChange={(event) => ChangeHandler(event)} />

          <button onClick={clickAddBtnHandler}>추가!</button>
          <h2>Todo List</h2>
        </div>

      </div>


      <div class="app-style">
        {todos.map(function (a) {
          return (
            <div key={a.id} class="component-style">{a.todo}</div>
          )
        })}
      </div>
    </>

  );
};

export default App;