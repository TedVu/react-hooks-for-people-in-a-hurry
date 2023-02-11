import { useEffect, useState } from "react";

function UseEffectHooks() {
  const [count, setCount] = useState(0);
  // 3 types of useEffect with dependency array
  useEffect(() => {
    // this line runs when application renders initially
    setCount(100);
  }, []);

  useEffect(() => {
    alert("I will appear after every state change and intially");

    // Questions how many times I will be rendered initially ;)
    // Answer: 3 times - initially, first assignment of count  = 0 and after we set count by using the
    // above hooks
  });

  useEffect(() => {
    alert("I will appear after every count state change");
  }, [count]);

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

export default UseEffectHooks;
