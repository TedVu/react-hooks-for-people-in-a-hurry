import React, { useState } from "react";

function UseStateHooks() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      {" "}
      <h1>{count}</h1>
      <button>CLICK</button>
    </div>
  );
}

export default UseStateHooks;
