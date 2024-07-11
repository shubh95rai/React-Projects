import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../Store/counterSlice";
import { useState } from "react";

function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const amount = Number(incrementAmount) || 0;

  const count = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  return (
    <div className="items-center flex flex-col gap-5 ">
      <h1 className="text-center text-8xl ">{count}</h1>

      <div className="flex gap-5 ">
        <p
          className=" p-2 rounded cursor-pointer border"
          onClick={() => {
            dispatch(decrement());
          }}>
          DECREMENT
        </p>

        <p
          className="border p-2 rounded cursor-pointer"
          onClick={() => {
            dispatch(increment());
          }}>
          {" "}
          INCREMENT
        </p>
      </div>

      <input
        type="text"
        maxLength={2}
        className="w-40 text-center text-8xl p-5 rounded bg-neutral-700 mt-5 outline-neutral-600"
        value={incrementAmount}
        onChange={(e) => {
          setIncrementAmount(e.target.value);
        }}
      />

      <div className="flex gap-5 justify-center">
        <p
          className="border p-2 rounded cursor-pointer"
          onClick={() => {
            dispatch(incrementByAmount(amount));
          }}>
          ADD AMOUNT
        </p>
        <p
          className="border p-2 rounded cursor-pointer"
          onClick={() => {
            dispatch(reset());
            setIncrementAmount(0);
          }}>
          RESET
        </p>
      </div>
    </div>
  );
}

export default Counter;
