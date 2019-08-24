import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Track from "./Track";
import LyricContext from "../../context/lyricContext";

const Tracks = () => {
  const lyricContext = useContext(LyricContext);

  useEffect(() => {
    getTop10();

    //eslint-disable-next-line
  }, []);

  const { trackList, heading, getTop10 } = lyricContext;

  return (
    <Fragment>
      {trackList === undefined || trackList.length === 0 ? (
        <Spinner />
      ) : (
        <Fragment>
          <h3 className="text-center mb-4">{heading}</h3>
          <div className="row">
            {trackList.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Tracks;
