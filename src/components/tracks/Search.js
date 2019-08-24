import React, { useState, useContext } from "react";
import LyricContext from "../../context/lyricContext";

const Search = () => {
  const lyricContext = useContext(LyricContext);
  const { search } = lyricContext;
  const [trackTitle, setTrackTitle] = useState("");

  const onChange = e => setTrackTitle(e.target.value);

  const onClick = () => {
    search(trackTitle);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music" /> Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Song title..."
          name="trackTitle"
          value={trackTitle}
          onChange={onChange}
        />
      </div>
      <button
        onClick={onClick}
        className="btn btn-primary btn-lg btn-block mb-5"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
