import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "./components/header/App";
import ProjectList from "./components/projects/ProjectList";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./App.css";
import TimelineApp from "./components/timeline/App";
import {textToSpans, animation} from './util/formatting'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    textToSpans();
    animation()
  }, []);

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
