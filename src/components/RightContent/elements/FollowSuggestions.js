import React from "react";

import "../RightContent.css";

export default function FollowSuggestions(props) {
  return (
    <div>
      <div className="right-content-title">
        <h1>Who to follow</h1>
      </div>

      {props.suggestions.map((suggestion, index) => {
        return (
          <div className="right-content-follow" key={index}>
            <div className="right-content-follow-item">
              <img src="/images/default_profile.png" alt="" />
              <div>
                <span className="right-content-follow-item-name">
                  {`${suggestion.firstname} ${suggestion.lastname}`}
                </span>
                <div>
                  <span className="right-content-follow-item-username">
                    {suggestion.username}
                  </span>

                  {suggestion.isFollower && (
                    <span className="right-content-follow-item-following">
                      Follows you
                    </span>
                  )}
                </div>
              </div>
              <button>Follow</button>
            </div>
          </div>
        );
      })}

      <div className="right-content-show-more">
        <span>Show more</span>
      </div>
    </div>
  );
}
