import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FollowSuggestions from "./elements/FollowSuggestions";
import UserTrends from "./elements/UserTrends";

import "./RightContent.css";

import {
  LoadUserTrends,
  LoadUserFollowSuggestions,
} from "../../modules/actions/RightContentActions";

export default function RightContent() {
  const dispatch = useDispatch();

  const userTrends = useSelector((state) => state.rightContent.trends);
  const followSuggestions = useSelector(
    (state) => state.rightContent.followSuggestions
  );

  useEffect(() => {
    dispatch(LoadUserTrends());
    dispatch(LoadUserFollowSuggestions());
  }, [dispatch]);

  return (
    <div className="right-content-container">
      <div className="right-content">
        <div className="right-content-searchbar">
          <img src="/images/ic_search.png" alt="" />
          <input type="text" placeholder="Search Twitter" />
        </div>

        <div
          className="right-content-information"
          style={{ height: `calc(${window.innerHeight}px - 58px)` }}
        >
          <UserTrends trends={userTrends} />
          <FollowSuggestions suggestions={followSuggestions} />

          <div className="right-content-footer">
            <span>
              <a href="/">Terms of Service</a>
            </span>
            <span>
              <a href="/">Privacy Policy</a>
            </span>
            <span>
              <a href="/">Cookie Policy</a>
            </span>
            <br />
            <span>
              <a href="/">Ads Info</a>
            </span>
            <span>
              <a href="/">More</a> <img src="/images/ic_more.png" alt="" />{" "}
            </span>
            <span>© 2021 Twitter, Inc.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
