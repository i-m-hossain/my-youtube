import React from "react";
import { useNavigate } from "react-router-dom";

function SuggestionsVideo({ video }) {
    const { snippet, statistics } = video;
    const { thumbnails, channelTitle, title } = snippet;
    const navigate = useNavigate();

    return (
        <div
            className="shadow-md  rounded grid grid-cols-12 space-x-2 mt-4 py-2 cursor-pointer hover:bg-gray-100 transition-all duration-250 items-center"
            onClick={() => navigate("/watch?v=" + video.id)}
        >
            <div className="col-span-4">
                <img
                    src={thumbnails?.maxres?.url}
                    alt={channelTitle}
                    className="border rounded-lg "
                />
            </div>

            <div className="col-span-8">
                <h2 className="text-left">{title}</h2>
                <h2 className="text-left">{channelTitle}</h2>
                <div className="flex space-x-2">
                    <p>
                        {statistics?.viewCount > 1000000
                            ? Math.floor(statistics.viewCount / 1000000) + "M"
                            : Math.floor(statistics.viewCount / 1000) + "K"}
                        views
                    </p>
                    <span>|</span>
                    <p className="list-decimal">
                        Likes: {statistics.likeCount}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SuggestionsVideo;
