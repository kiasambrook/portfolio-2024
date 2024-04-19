import "./App.css";
import React from "react";
import Header from "./components/header/App";
import ProjectList from "./components/projects/ProjectList";

function App() {
  return (
    <div
      data-scroll-container
      className="text-black bg-cyan-50 dark:bg-gray-900 dark:text-white w-full box-border p-0 m-0"
    >
      <div className="container mx-auto p-4 bg-fixed">
        <Header />
      </div>
      <ProjectList />
    </div>
  );
}

export default App;
