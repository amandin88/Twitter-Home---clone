import React, { useState } from "react";

import "../MainContent.css";

export default function TweetCreation() {
  const [displayNewTweetVisibility, setDisplayNewTweetVisibility] =
    useState(false);
  const [newTweetBtnEnabled, setNewTweetBtnEnabled] = useState(false);
  const [newTweetContent, setNewTweetContent] = useState("");
  const [newTweetNumberOfLines, setNewTweetNumberOfLines] = useState(1);

  function newTweetHandler(value) {
    if (value === "") setNewTweetBtnEnabled(false);
    else setNewTweetBtnEnabled(true);

    setNewTweetContent(value);

    //check the number of characters to resize the textarea height if needed
    if (parseInt(value.length / 49 + 1) !== newTweetNumberOfLines)
      setNewTweetNumberOfLines(parseInt(value.length / 49 + 1));
  }

  return (
    <div className="main-content-new-tweet-container">
      <div className="main-content-new-tweet">
        <img src="/images/default_profile.png" alt="" />

        <div className="main-content-new-tweet-input">
          <textarea
            style={{ height: `calc(${newTweetNumberOfLines} * 22px)` }}
            placeholder="What's happening?"
            onFocus={() => {
              if (!displayNewTweetVisibility)
                setDisplayNewTweetVisibility(true);
            }}
            value={newTweetContent}
            onChange={(event) => {
              newTweetHandler(event.target.value);
            }}
          />

          {displayNewTweetVisibility && (
            <div className="main-content-new-tweet-visibility">
              <span>
                <img src="/images/ic_visibility_all.png" alt="" /> Everyone can
                reply
              </span>
            </div>
          )}

          <div className="main-content-new-tweet-controls">
            <div>
              <img src="/images/ic_add_media.png" alt="" />
              <img src="/images/ic_add_gif.png" alt="" />
              <img src="/images/ic_add_poll.png" alt="" />
              <img src="/images/ic_add_emoji.png" alt="" />
              <img src="/images/ic_add_schedule.png" alt="" />
            </div>
            <button className={newTweetBtnEnabled ? "" : "disabled"}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
