import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../store/slices/sidebarSlice";
import Comments from "./Comments";
import SuggestionList from "./SuggestionList";
import VideoDescription from "./VideoDescription";
import VideoPlayer from "./VideoPlayer";

function SingleVideo() {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const videoId = searchParams.get("v");
    
    useEffect(() => {
        dispatch(closeMenu());
    }, []);

   
    return (
        <div className="mx-12 my-4 grid grid-cols-12 gap-x-4">
            <div className="col-span-12 md:col-span-9 ">
                <VideoPlayer videoId={videoId}/>
                <VideoDescription videoId={videoId}/>
                <Comments videoId={videoId}/>
            </div>
            
            <div className="col-span-12 md:col-span-3 ">
                <SuggestionList/>
            </div>
            
        </div>
    );
}

export default SingleVideo;
