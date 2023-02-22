import React from "react";
import { useNavigate } from "react-router-dom";
import { YOUTUBE_VIDEO_LIST_API } from "../config";
import useFetchData from "../customHook/fetchYoutubeVideos";
import SuggestionsVideo from "./SuggestionsVideo";
function SuggestionList() {
    const navigate = useNavigate();
    const [loading, error, data] = useFetchData(YOUTUBE_VIDEO_LIST_API);
    if (loading) {
        return <p className="ml-10">loading..</p>;
    }
    if (error) {
        return <p className="ml-10">{error.message}</p>;
    }

    return data.items.map((video) => (
        <div
            className="shadow-md  rounded grid grid-cols-12 space-x-2 mt-4 py-2 cursor-pointer hover:bg-gray-100 transition-all duration-250 items-center"
            onClick={() => navigate("/watch?v=" + video.id)}
            key={video.id}
        >
            <SuggestionsVideo video={video}  />
        </div>
    ));
}

export default SuggestionList;
