import React from 'react';

const StreamableVideo = ({ videoId }) => {
  return (
    <iframe
      src={`https://streamable.com/e/${videoId}`}
      width="560"
      height="315"
      frameBorder="0"
      allowFullScreen
      title="Streamable Video"
    ></iframe>
  );
};

export default StreamableVideo;
