import React, { createContext, useContext, useState } from "react";

function UseContextHooks() {
  return (
    <div style={{ textAlign: "center" }}>
      <ParentComponent />
    </div>
  );
}

export default UseContextHooks;

const UserContext = createContext();
function ParentComponent() {
  const [user, setUser] = useState("Ted Vu");
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Parent component </h1>
        <ChildComponent1 />
      </div>
    </UserContext.Provider>
  );
}

function ChildComponent1() {
  return (
    <div>
      <ChildComponent2 />
    </div>
  );
}

function ChildComponent2() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Child component 2</h1>
      <h1>Hello from {user}</h1>
    </div>
  );
}
