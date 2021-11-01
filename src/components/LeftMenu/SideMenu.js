import React from "react";
import NavOptions from "./elements/NavOptions";
import UserOption from "./elements/UserOption";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <NavOptions />
      <UserOption />
    </div>
  );
}
