import { MainContentActions } from "../../constants/Actions";

const initialState = {
  tweetsLoaded: [],
};

const MainContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case MainContentActions.LOAD_USER_ALL_TWEETS:
      return {
        ...state,
        tweetsLoaded: action.tweetsLoaded,
      };

    default:
      return state;
  }
};

export default MainContentReducer;
