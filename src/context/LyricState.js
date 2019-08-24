import React, { useReducer } from "react";
import axios from "axios";
import LyricContext from "./lyricContext";
import lyricReducer from "./lyricReducer";
import { GETTOPCHART, SEARCH } from "./Types";

const LyricState = props => {
  const initialState = {
    trackList: [],
    heading: "Top 10 Tracks"
  };

  const [state, dispatch] = useReducer(lyricReducer, initialState);

  // Get Top 10 US Chart (Artist, Song, Album Name)
  const getTop10 = async () => {
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`
      );

      //console.log(res.data.message.body.track_list);
      dispatch({
        type: GETTOPCHART,
        payload: res.data.message.body.track_list
      });
    } catch (err) {
      console.log("Server Error");
    }
  };

  const search = async text => {
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${text}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`
      );
      dispatch({
        type: SEARCH,
        payload: res.data.message.body.track_list
      });
    } catch (err) {
      console.log("Server Error");
    }
  };

  return (
    <LyricContext.Provider
      value={{
        trackList: state.trackList,
        heading: state.heading,
        getTop10,
        search
      }}
    >
      {props.children}
    </LyricContext.Provider>
  );
};

export default LyricState;
