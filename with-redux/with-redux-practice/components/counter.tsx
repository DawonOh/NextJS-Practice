"use client";

import { counterActions } from "@/lib/counter-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export default function Counter() {
  const selector = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState("2");
  const inputValue = Number(amount) || 0;

  const addWithAmount = () => {
    dispatch(counterActions.addAmount(inputValue));
  };

  return (
    <>
      <div className="flexCenter gap-4 mb-4">
        <button
          className="buttonLayout"
          onClick={() => dispatch(counterActions.setMinus())}
        >
          -
        </button>
        <span className="text-5xl px-4">{selector.num}</span>
        <button
          className="buttonLayout"
          onClick={() => dispatch(counterActions.setPlus())}
        >
          +
        </button>
      </div>
      <div className="flexCenter gap-4">
        <input
          type="number"
          className="w-20 p-1 text-3xl text-center border rounded-md outline-none"
          defaultValue={2}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button className="buttonLayout" onClick={addWithAmount}>
          Add Amount
        </button>
      </div>
    </>
  );
}
