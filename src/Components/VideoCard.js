import React from "react";
import { useNavigate } from "react-router-dom";
import Description from "./Description";

function VideoCard({ video }) {
    const { snippet, statistics } = video;
    const { thumbnails,channelTitle } = snippet;
    const navigate= useNavigate()
    
    return (
        <div className="shadow-lg p-4 rounded mx-auto cursor-pointer hover:bg-gray-100 transition-all hover:scale-[1.1] duration-250" onClick={()=>navigate("/watch?v="+video.id)}>
            <div>
                <img
                    src={thumbnails?.maxres?.url}
                    alt={channelTitle}
                    className="border rounded-lg "
                />
            </div>
            <Description statistics={statistics} snippet={snippet} />
            
        </div>
    );
}

export default VideoCard;
