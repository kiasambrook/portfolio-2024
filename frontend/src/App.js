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
      className="text-black bg-slate-200 dark:bg-gray-900 dark:text-white w-full box-border p-0 m-0"
    >
      <DarkThemeToggle className="fixed bottom-2.5 left-2.5 dark:border-cyan-50 border border-gray-900 dark:bg-gray-900 rounded-full z-50" />
      <Header />
      <ProjectList />
      <TimelineApp />
    </div>
  );
}

export default App;
