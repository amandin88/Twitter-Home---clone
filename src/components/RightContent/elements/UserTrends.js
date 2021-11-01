import React from "react";

import "../RightContent.css";

export default function UserTrends(props) {
  return (
    <div>
      <div className="right-content-title">
        <h1>
          Trends for you
          <img src="/images/ic_configs.png" alt="" />
        </h1>
      </div>

      {props.trends.map((trend, index) => {
        return (
          <div className="right-content-trend-item" key={index}>
            <span>
              {trend.category} <img src="/images/ic_more.png" alt="" />
            </span>
            <span className="trend-keyword">{trend.keyword}</span>
            <span>{trend.stats} Tweets</span>
          </div>
        );
      })}

      <div className="right-content-show-more">
        <span>Show more</span>
      </div>
    </div>
  );
}
