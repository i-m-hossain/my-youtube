import React from "react";
import { YOUTUBE_VIDEO_LIST_API } from "../config";
import useFetchVideos from "../customHook/fetchYoutubeVideos";
import SuggestionsVideo from "./SuggestionsVideo";
function SuggestionList() {
    const [loading, error, data] = useFetchVideos(YOUTUBE_VIDEO_LIST_API);
    if (loading) {
        return <p>loading..</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    return data.items.map((video) => (
        <SuggestionsVideo video={video} key={video.id}/>
    ));
}

export default SuggestionList;
