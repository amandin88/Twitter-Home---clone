import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tweet from "./elements/Tweet";
import TweetCreation from "./elements/TweetCreation";

import "./MainContent.css";

import { loadAllTweets } from "../../modules/actions/MainContentActions";

export default function MainContent() {
  const dispatch = useDispatch();

  const tweets = useSelector((state) => state.mainContent.tweetsLoaded);

  useEffect(() => {
    dispatch(loadAllTweets());
  }, [dispatch]);

  return (
    <div className="main-content-container">
      <div className="main-content-header">
        <div>
          <h1>Home</h1>
          <img src="/images/ic_top_tweet.png" alt="" />
        </div>
      </div>

      <div
        className="main-content"
        style={{ maxHeight: `calc(${window.innerHeight}px - 4px - 58px)` }}
      >
        <TweetCreation />
        <Tweet tweets={tweets} />
      </div>
    </div>
  );
}
