import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu, showMenu } from "../store/slices/sidebarSlice";
import { stopStreaming } from "../store/slices/streamSlice";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import SuggestionList from "./SuggestionList";
import VideoDescription from "./VideoDescription";
import VideoPlayer from "./VideoPlayer";

function SingleVideo() {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const videoId = searchParams.get("v");
    const isStreaming = useSelector((state) => state.stream.isStreaming);
    useEffect(() => {
        dispatch(closeMenu());
        return () => {
            dispatch(showMenu());
            dispatch(stopStreaming());
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className="mx-12 my-4 grid grid-cols-12 gap-x-4">
            <div className="col-span-12 md:col-span-9 ">
                <VideoPlayer videoId={videoId} />
                <VideoDescription videoId={videoId} />
                <Comments videoId={videoId} />
            </div>

            <div className="col-span-12 md:col-span-3 ">
                {!isStreaming ? <SuggestionList /> : <LiveChat />}
            </div>
        </div>
    );
}

export default SingleVideo;
