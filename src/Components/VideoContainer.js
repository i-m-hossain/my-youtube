import React from "react";

function VideoContainer({ children }) {
    return <div className="mx-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">{children}</div>;
}

export default VideoContainer;
