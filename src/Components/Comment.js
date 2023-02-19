import React from "react";

function Comment({ comment }) {
    const { topLevelComment } = comment.snippet;
    const { snippet } = topLevelComment;
    return (
        <div className="w-full flex space-x-4 ">
            <img
                src={snippet.authorProfileImageUrl}
                alt={snippet.authorDisplayName}
                className="w-12 h-12 rounded-full"
            />
            <div>
                <h2 className="font-medium" >{snippet.authorDisplayName}</h2>
                <p>{snippet.textDisplay}</p>
                <p>like: {snippet.likeCount}</p>
            </div>
        </div>
    );
}

export default Comment;
