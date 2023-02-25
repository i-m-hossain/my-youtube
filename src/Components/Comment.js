import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import CommentInfo from "./CommentInfo";
import ReplyContainer from "./ReplyContainer";
function Comment({ comment }) {
    const [dropdown, setDropDown] = useState(false);
    const { topLevelComment } = comment?.snippet;
    const { snippet } = topLevelComment;

    return (
        <div className="w-full  ">
            <CommentInfo snippet={snippet} />
            <div className="ml-12">
                {comment?.snippet?.totalReplyCount > 0 ? (
                    <div>
                        <div
                            className="flex space-x-1 cursor-pointer"
                            onClick={() => setDropDown((prev) => !prev)}
                        >
                            <IoMdArrowDropdown
                                className={`text-blue-600 ${
                                    dropdown ? "rotate-180" : "rotate-0"
                                }`}
                                size={30}
                            />

                            <p className="text-blue-600 font-medium">replies</p>
                        </div>
                        {dropdown && (
                            <ReplyContainer
                                parentCommentId={topLevelComment.id}
                            />
                        )}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Comment;
