import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

const Lyrics = ({ match }) => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        setLyrics(res.data.message.body.lyrics);

        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
        );
      })
      .then(res => {
        console.log(res.data.message.body.track);
        setTrack(res.data.message.body.track);
      })
      .catch(err => console.log("Server Error"));

    //eslint-disable-next-line
  }, []);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics) === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name}{" "}
            <span className="text-secondary">by {track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album Name</strong>: {track.album_name}
          </li>
          <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {
              track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            }
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>: {!track.explicit ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <a href={track.track_share_url} className="btn btn-dark btn-block">
              Full Lyrics
            </a>
          </li>
        </ul>
      </Fragment>
    );
  }
};

export default Lyrics;
