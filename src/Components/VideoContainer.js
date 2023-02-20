import React from "react";

function VideoContainer({ children }) {
    return <div className="mx-12 mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 lg:grid-cols-4">{children}</div>;
}

export default VideoContainer;
