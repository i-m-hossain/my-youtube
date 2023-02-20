import React from "react";
import { GET_YOUTUBE_VIDEO_DESCRIPTION_API } from "../config";
import useFetchData from "../customHook/fetchYoutubeVideos";
import Description from "./Description";

const VideoDescription = ({ videoId }) => {
    const [loading, error, data] = useFetchData(
        GET_YOUTUBE_VIDEO_DESCRIPTION_API(videoId)
    );
    if (loading) {
        return <p>loading</p>;
    }
    if (error) {
        return <p> {error.message}</p>;
    }
    const { snippet, statistics } = data.items[0];
   
    return (
        <div className="w-full mt-4">
            <Description snippet={snippet} statistics={statistics} >
                <div className="mt-4 rounded bg-gray-100 p-4">
                    <h2>{snippet.description}</h2>
                </div>
            </Description> 
        </div>
    );
};

export default VideoDescription;
