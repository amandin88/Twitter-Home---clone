import React from "react";

import "../SideMenu.css";

export default function UserOption() {
  const user = {
    firstname: "Alex",
    lastname: "MobileDev",
    username: "@AlexMobileDev",
  };

  return (
    <div>
      <div className="side-menu-user-options">
        <img className="profile" src="/images/default_profile.png" alt="" />
        <div>
          <h2>{`${user.firstname} ${user.lastname}`}</h2>
          <h3>{user.username}</h3>
        </div>
        <img src="/images/ic_more.png" alt="" />
      </div>
    </div>
  );
}
