import React from "react";
import { GET_YOUTUBE_COMMENT_THREAD_API } from "../config";
import useFetchData from "../customHook/fetchYoutubeVideos";
import Comment from "./Comment";

function Comments({ videoId }) {
    const [loading, error, data] = useFetchData(
        GET_YOUTUBE_COMMENT_THREAD_API(videoId)
    );
    if (loading) {
        return <p>loading...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    
    return <div className="w-full hidden md:flex flex-col space-y-4 mt-6">
        <h2 className="font-semibold">Comments</h2>
        {data.items.map(comment=> <Comment key={comment.id} comment={comment}/>)}
    </div>;
}

export default Comments;
