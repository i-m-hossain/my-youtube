import React from "react";
import VideoCard from "../Components/VideoCard";
import { CiStreamOn } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { startStreaming } from "../store/slices/streamSlice";
function LiveVideoCard({ video }) {
    const dispatch = useDispatch()

    return (
        <div className="border border-red-600 p-4 rounded-md" onClick={()=> dispatch(startStreaming())}>
            <VideoCard video={video} />
            <div className="flex py-3 my-3 pl-4 rounded items-center space-x-4 bg-red-600">
                <CiStreamOn size={25} color="white"/>
                <p className="text-white font-semibold">Live</p>
            </div>
        </div>
    );
}
export default LiveVideoCard;
