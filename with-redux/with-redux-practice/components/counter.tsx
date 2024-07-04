"use client";

import { counterActions } from "@/lib/counter-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Counter() {
  const selector = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-4 items-center">
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
  );
}
