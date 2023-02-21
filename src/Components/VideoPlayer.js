import React from "react";
import { YOUTUBE_URL } from "../config";


function VideoPlayer({ videoId }) {
    return (
        <iframe
            className="w-full h-[400px] md:h-[700px]"
            src={YOUTUBE_URL + videoId + "?autoplay=1"}
            title={videoId}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
}

export default VideoPlayer;
