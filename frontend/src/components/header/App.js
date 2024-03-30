import React from "react";
import Navigation from "./Navigation";
import Background from "./../svgs/background";
import Banner from "./Banner";

const Header = ({ className }) => {
  return (
    <header className="h-screen">
      <Navigation />

      <Banner />

      <Background className="absolute bottom-0 right-0 lg:right-20 mix-blend-difference stroke-white opacity-15 h-1/2 lg:h-3/5 -z-0" />
    </header>
  );
};

export default Header;
