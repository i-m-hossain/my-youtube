import React from "react";
import useFetchData from "../customHook/fetchYoutubeVideos";
import { GET_YOUTUBE_COMMENT_REPLIES } from "../config";
import CommentInfo from "./CommentInfo";

const ReplyContainer = ({ parentCommentId }) => {
    const [loading, error, data] = useFetchData(
        GET_YOUTUBE_COMMENT_REPLIES(parentCommentId)
    );
    if (loading) {
        return <p>loading...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    
    return (
        <div className="w-full flex space-x-4 ">
            <CommentInfo snippet={data.items[0].snippet}/>
        </div>
    );
};

export default ReplyContainer;
