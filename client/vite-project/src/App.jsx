import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Routes } from "./Router/Router";
const router = createBrowserRouter(Routes);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
