import React from "react";

import "./App.css";
import SideMenu from "./components/LeftMenu/SideMenu";
import MainContent from "./components/MainContent/MainContent";
import RightContent from "./components/RightContent/RightContent";

export default function App() {
  return (
    <div
      className="page-content"
      style={{ height: `calc(${window.innerHeight}px - 4px)` }}
    >
      <SideMenu />
      <MainContent />
      <RightContent />
    </div>
  );
}
