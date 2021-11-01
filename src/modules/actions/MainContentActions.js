import { MainContentActions } from "../../constants/Actions";

import { TWEETS } from "../../dummyData/DummyData";

export const loadAllTweets = () => {
  return async (dispatch) => {
    dispatch({
      type: MainContentActions.LOAD_USER_ALL_TWEETS,
      tweetsLoaded: TWEETS,
    });
  };
};
