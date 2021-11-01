import React from "react";
import HtmlParser from "html-react-parser";

import "../MainContent.css";

export default function Tweet(props) {
  return props.tweets.map((tweet) => {
    return (
      <div className="main-content-tweet-container">
        <div className="main-content-tweet">
          {tweet.action === "RT" && (
            <div className="main-content-tweet-action">
              <img src="/images/ic_retweet.png" alt="" />
              <span>{tweet.actionBy} Retweeted</span>
            </div>
          )}

          <div className="main-content-tweet-data">
            <div className="main-content-tweet-profile">
              <img src="/images/default_profile.png" alt="" />
            </div>

            <div>
              <div className="main-content-tweet-author">
                <div>
                  <span className="bold">
                    {tweet.author.firstname + " " + tweet.author.lastname}
                  </span>

                  {tweet.author.isVerified ? (
                    <span>
                      <img src="/images/ic_verified.png" alt="" />
                    </span>
                  ) : (
                    HtmlParser("&ensp;")
                  )}

                  <span>
                    {tweet.author.username + " · " + tweet.timeSincePosted}
                  </span>
                </div>
                <img src="/images/ic_more.png" alt="" />
              </div>

              <div className="main-content-tweet-text">
                <span>{HtmlParser(tweet.content)}</span>
              </div>

              <div className="main-content-tweet-media">
                <img src={tweet.media[0]} alt="" />
              </div>

              <div className="main-content-tweet-controls">
                <span>
                  <img src="/images/ic_comment.png" alt="" />
                  <span>{tweet.comments}</span>
                </span>
                <span>
                  <img
                    className="retweet"
                    src="/images/ic_retweet.png"
                    alt=""
                  />
                  <span>{tweet.retweets}</span>
                </span>
                <span>
                  <img className="like" src="/images/ic_like.png" alt="" />
                  <span>{tweet.likes}</span>
                </span>
                <span>
                  <img src="/images/ic_share.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
