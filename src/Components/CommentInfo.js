import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";

function CommentInfo({snippet}) {
    return (
        <div className="flex space-x-2 ">
            <img
                src={snippet.authorProfileImageUrl}
                alt={snippet.authorDisplayName}
                className="w-12 h-12 rounded-full"
            />
            <div>
                <h2 className="font-medium">{snippet.authorDisplayName}</h2>
                <p>{snippet.textDisplay}</p>
                <div className="flex space-x-2 items-center">
                    <BiLike />
                    <p>{snippet.likeCount}</p>
                    <BiDislike />
                </div>
            </div>
        </div>
    );
}

export default CommentInfo;
