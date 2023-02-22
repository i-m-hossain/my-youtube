import React from "react";
function SuggestionsVideo({ video }) {
    const { snippet } = video;
    const { thumbnails, channelTitle, title } = snippet;
    return (
        <>
            <div className="col-span-4">
                <img
                    src={
                        thumbnails?.maxres
                            ? thumbnails.maxres.url
                            : thumbnails?.medium?.url
                    }
                    alt={channelTitle}
                    // className="border rounded-lg w-60 h-24"
                />
            </div>

            <div className="col-span-8">
                <h2 className="text-left">{title}</h2>
                <h2 className="text-left">{channelTitle}</h2>
                <p>
                    Posted at: {new Date(snippet?.publishedAt).toDateString()}
                </p>
            </div>
        </>
    );
}

export default SuggestionsVideo;
