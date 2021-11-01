import { RightContentActions } from "../../constants/Actions";

import { TRENDS, FOLLOW_SUGGESTIONS } from "../../dummyData/DummyData";

export const LoadUserTrends = () => {
  return async (dispatch) => {
    dispatch({
      type: RightContentActions.LOAD_USER_TRENDS,
      trends: TRENDS,
    });
  };
};

export const LoadUserFollowSuggestions = () => {
  return async (dispatch) => {
    dispatch({
      type: RightContentActions.LOAD_USER_FOLLOW_SUGGESTIONS,
      followSuggestions: FOLLOW_SUGGESTIONS,
    });
  };
};
