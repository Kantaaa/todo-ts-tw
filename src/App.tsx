import React from "react";
import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Todos />
    </div>
  );
}

export default App;
