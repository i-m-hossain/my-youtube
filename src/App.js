import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Body from "./Components/Body";
import Button from "./Components/Button";
import ButtonList from "./Components/ButtonList";
import Shimmer from "./Components/Shimmer";
import VideoCard from "./Components/VideoCard";
import VideoContainer from "./Components/VideoContainer";
import { YOUTUBE_CATEGORIES, YOUTUBE_VIDEO_LIST_API } from "./config";
import useFetchData from "./customHook/fetchYoutubeVideos";
import { showMenu } from "./store/slices/sidebarSlice";

function App() {
    const dispatch = useDispatch();
    const [loading, error, data] = useFetchData(YOUTUBE_VIDEO_LIST_API);
    const [catLoading, catError, catData] = useFetchData(YOUTUBE_CATEGORIES);
    useEffect(() => {
        dispatch(showMenu());
        //eslint-disable-next-line
    }, []);
    if (loading) {
        return (
            <Body>
                <VideoContainer>
                    {new Array(12).fill("").map((item, i) => (
                        <Shimmer key={i} />
                    ))}
                </VideoContainer>
            </Body>
        );
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return (
        <>
            <Body>
                <ButtonList loading={catLoading} error={catError} data={catData}/>
                <VideoContainer>
                    {data?.items.map((video, i) => (
                        <VideoCard key={i} video={video} />
                    ))}
                </VideoContainer>
            </Body>
        </>
    );
}

export default App;
