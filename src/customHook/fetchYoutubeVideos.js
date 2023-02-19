import { useEffect, useState } from "react";

const useFetchVideos = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchVideos();
    //eslint-disable-next-line 
    }, []);

    async function fetchVideos() {
        try {
            setLoading(true);
            const response = await fetch(url);
            const info = await response.json();
            setData(info);
            setError(null);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return [loading, error, data];
};
export default useFetchVideos;
