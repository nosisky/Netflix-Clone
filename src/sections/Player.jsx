import React from "react";
import YouTube from "react-youtube";

export function Player({ trailerUrl }) {
  const opts = {
    height: 448,
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
