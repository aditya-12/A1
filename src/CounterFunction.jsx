import React, { useState } from "react";

export function CounterFunction() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div className="flex flex-col items-center">
      <p className="text-6xl font-bold text-[#2563eb] mb-8">{count}</p>
      <div className="flex gap-4">
        <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-3xl font-semibold px-6 py-2 rounded-lg shadow transition-all" onClick={decrement}>
          -
        </button>
        <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-3xl font-semibold px-6 py-2 rounded-lg shadow transition-all" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
