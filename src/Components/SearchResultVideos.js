import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../config";
import useFetchData from "../customHook/fetchYoutubeVideos";
import SuggestionsVideo from "./SuggestionsVideo";

function SearchResultVideos() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search_query");
    const navigate = useNavigate();
    const [loading, error, data] = useFetchData(
        YOUTUBE_SEARCH_API(searchQuery.split(" ").join("+"))
    );

    if (loading) {
        return <p>loading</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return (
        <div className="mt-4">
            {data.items.map((video, i) => (
                <div
                    className="mx-12 shadow-lg w-full rounded grid grid-cols-12 space-y-2 justify-center p-4 mb-4 cursor-pointer hover:bg-gray-100 transition-all duration-250 "
                    onClick={() => navigate("/watch?v=" + video.id.videoId)}
                    key={video?.id?.videoId+i}
                >
                    <SuggestionsVideo video={video} />
                </div>
            ))}
        </div>
    );
}

export default SearchResultVideos;
