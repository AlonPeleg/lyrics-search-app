import { GETTOPCHART } from "./Types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GETTOPCHART:
      return {
        ...state,
        trackList: payload
      };
    default:
      return state;
  }
};
