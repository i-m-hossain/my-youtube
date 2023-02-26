import React from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../config";
import { addButtonListVideos } from "../store/slices/buttonListVideosSlice";

function Button({ text }) {
    const dispatch = useDispatch();
    const handleSearch = async () => {
        try {
            const result = await fetch(
                YOUTUBE_SEARCH_API(text.split("").join("+"))
            );
            const data = await result.json();
            dispatch(addButtonListVideos(data))
        } catch (error) {
          console.log(error)
        }
    };
    return (
        <button
            className="border px-3 py-2 rounded bg-gray-200 hover:scale-110 transition-all"
            onClick={handleSearch}
        >
            {text}
        </button>
    );
}

export default Button;
