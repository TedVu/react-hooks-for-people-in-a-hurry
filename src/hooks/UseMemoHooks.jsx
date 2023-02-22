import React, { useState } from "react";

function UseMemoHooks() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      {" "}
      <h1>{count}</h1>
      <button
        style={{ margin: "1rem" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        style={{ margin: "1rem" }}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default UseMemoHooks;
