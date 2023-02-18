import { useEffect, useState } from "react";
import {  YOUTUBE_VIDEO_LIST_API } from "../config";

const useFetchVideos = () => {
    const [videos, setVideos] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchVideos();
    }, []);

    async function fetchVideos() {
        try {
            setLoading(true);
            const response = await fetch(YOUTUBE_VIDEO_LIST_API);
            const data = await response.json();
            setVideos(data.items);
            setError(null);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return [loading, error, videos];
};
export default useFetchVideos;
