import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/toolkitReducer";
import './App.css'

export default function App() {
  const count = useSelector(state => state.toolkit.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="buttons-wrap">
        <button onClick={() =>dispatch(increment())}>+</button>
        <button onClick={() =>dispatch(decrement())}>-</button>
      </div>
      <h2>{count}</h2>
    </div>
  );
}
