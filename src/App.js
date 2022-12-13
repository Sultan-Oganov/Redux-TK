import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addTodo, removeTodo } from "./redux/toolkitSlice";
import './App.css';

const addAsyncTodo = () => async(dispatch) => {
  setTimeout(() => dispatch(addTodo('Async ToDo')), 2000);
}


export default function App() {
  const { count, todos } = useSelector(state => state.toolkit);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="buttons-wrap">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(addTodo(prompt('Todo')))}>add</button>
        <button onClick={() => dispatch(addAsyncTodo())}>add Async TODO</button>
      </div>
      <h2>{count}</h2>
      <ul>
        {
          todos.map((el) => (
            <div key={el.id}>
              <li>{el.name}</li>

              <button onClick={() => dispatch(removeTodo(el.id))}>-</button>

            </div>
          ))
        }
      </ul>
    </div>
  );
}
