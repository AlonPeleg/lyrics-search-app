import { GETTOPCHART, SEARCH } from "./Types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GETTOPCHART:
    case SEARCH:
      return {
        ...state,
        trackList: payload
      };
    default:
      return state;
  }
};
