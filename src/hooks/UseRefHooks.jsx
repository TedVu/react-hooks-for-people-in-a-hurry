import { useRef } from "react";
function UseRefHooks() {
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <div style={{ textAlign: "center", margin: "5rem" }}>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefHooks;
