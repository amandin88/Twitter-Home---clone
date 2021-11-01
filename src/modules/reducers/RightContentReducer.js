import { RightContentActions } from "../../constants/Actions";

const initialState = {
  trends: [],
  followSuggestions: [],
};

const RightContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case RightContentActions.LOAD_USER_TRENDS:
      return {
        ...state,
        trends: action.trends,
      };

    case RightContentActions.LOAD_USER_FOLLOW_SUGGESTIONS:
      return {
        ...state,
        followSuggestions: action.followSuggestions,
      };

    default:
      return state;
  }
};

export default RightContentReducer;
