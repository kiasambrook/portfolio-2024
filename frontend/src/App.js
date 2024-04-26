import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "./components/header/App";
import ProjectList from "./components/projects/ProjectList";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./App.css";
import TimelineApp from "./components/timeline/App";
import { textToSpans, animation } from "./util/formatting";
import { DarkThemeToggle } from "flowbite-react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    textToSpans();
    animation();
  }, []);

  return (
    <div
      data-scroll-container
      className="text-black bg-cyan-50 dark:bg-gray-900 dark:text-white w-full box-border p-0 m-0"
    >
      <DarkThemeToggle className="fixed top-1/4 dark:bg-gray-900 rounded-r-md rounded-l-none" />
      <Header />
      <ProjectList />
      <TimelineApp />
    </div>
  );
}

export default App;
