import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import UseStateHooks from "./hooks/UseStateHooks";
import UseEffectHooks from "./hooks/UseEffectHooks";
import UseRefHooks from "./hooks/UseRefHooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/useState",
    element: <UseStateHooks />,
  },
  {
    path: "/useeffect",
    element: <UseEffectHooks />,
  },
  {
    path: "/useref",
    element: <UseRefHooks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
