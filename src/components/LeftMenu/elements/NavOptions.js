import React from "react";

import "../SideMenu.css";

export default function NavOptions() {
  const options = [
    { label: "Home", imgURL: "ic_home.png", isSelected: true },
    { label: "Explore", imgURL: "ic_explore.png", isSelected: false },
    {
      label: "Notifications",
      imgURL: "ic_explore.png",
      isSelected: false,
    },
    { label: "Messages", imgURL: "ic_messages.png", isSelected: false },
    {
      label: "Bookmarks",
      imgURL: "ic_bookmarks.png",
      isSelected: false,
    },
    { label: "Lists", imgURL: "ic_lists.png", isSelected: false },
    { label: "Profile", imgURL: "ic_profile.png", isSelected: false },
    { label: "More", imgURL: "ic_more_circle.png", isSelected: false },
  ];

  return (
    <div>
      <div className="side-menu-container">
        <div className="side-menu-option logo">
          <img src="/images/logo.png" alt="" />
        </div>
      </div>

      {options.map((option, index) => {
        return (
          <div className="side-menu-container" key={index}>
            <div className="side-menu-option">
              <img src={`/images/${option.imgURL}`} alt="" />
              <h1 className={option.isSelected ? "selected" : ""}>
                {option.label}
              </h1>
            </div>
          </div>
        );
      })}

      <button className="side-menu-tweet-btn">Tweet</button>
    </div>
  );
}
