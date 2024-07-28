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
import Sidebar from "./components/sidebar/App";
import Contact from "./components/contact/App";
import Footer from "./components/footer/App";

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
      <Sidebar />
      <Header />
      <ProjectList />
      <TimelineApp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
